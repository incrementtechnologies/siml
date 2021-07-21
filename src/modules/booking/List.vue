<template>
  <div style="margin: 56px;">
    <filter-product v-bind:category="category" 
      :activeCategoryIndex="0"
      :activeSortingIndex="0"
      @changeSortEvent="retrieve($event.sort, $event.filter)"
      :grid="['list']">
    </filter-product>
    <table v-if="data !== null && data.length > 0" class="table table-bordered table-responsive">
      <thead>
        <tr>
          <td>Reservee</td>
          <td>Date of Reservation</td>
          <td>No. of Guest</td>
          <td>Code</td>
          <td>Status</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody v-if="data">
        <tr v-for="(item, index) in data" :key="index">
          <td>
            {{item.reservee}}
          </td>
          <td>{{item.date_time_at_human}}</td>
          <td>{{item.members ? item.members.length : 0}}</td>
          <td v-if="item.status === 'accepted' || item.status === 'completed'" @click="toggleCode()" style="cursor:pointer" 
            data-toggle="tooltip" data-placement="top" 
            title="Click Me to Show the Entire Code" >
              {{click ? item.code : '...' + item.code.slice(-6)}}
          </td>
          <td v-else></td>
          <td>{{item.status}}</td>
          <td>
            <button class="btn btn-primary" style="display: block;margin: auto;" @click="showModal(item)">EDIT</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-primary pull-right" style="margin-bottom: 25px;" @click="retrieve(currentSort, currentFilter, true)">See More</button>
   <div class="modal fade" id="editBooking" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit Booking</h5>
          <button type="button" class="close" @click="hideModal()" aria-label="Close">
            <span aria-hidden="true" class="text-primary">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="name">Reservee: <span>*</span></label>
            <input type="text" placeholder="Reservee" v-model="reservee" class="form-control-custom form-control" required disabled>
          </div>
          <div class="form-group">
            <label for="name">Date of Reservation: <span>*</span></label>
            <input type="datetime" maxlength="150" placeholder="Date of Reservation" v-model="datetime" class="form-control-custom form-control" required disabled>
          </div>
          <div class="form-group">
            <label for="name">No. of Guest: <span>*</span></label>
            <input type="text" maxlength="150" placeholder="No. of Guest" v-model="guest" class="form-control-custom form-control" required disabled>
          </div>
          <div class="form-group">
            <label for="name">Status: <span>*</span></label>
            <br>
            <select class="form-group form-control-custom form-control" v-model="status" :disabled="reservationStatus === 'completed' || reservationStatus === 'cancelled'">
              <option value="accepted">Accepted</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" @click="hideModal()">Cancel</button>
          <button type="button" class="btn btn-primary" @click="update()">Save</button>
        </div>
      </div>
    </div>
    </div>
    <empty v-if="data === null || data.length === 0" :title="'Empty Bookings!'" :action="'No activity at the moment.'"></empty>
    <confirmation
    :title="'Confirmation Modal'"
    :message="'Are you sure you want to delete ?'"
    ref="confirms"
    @onConfirm="remove()"
    >
    </confirmation>
  </div>
</template>
<script>
import AUTH from 'src/services/auth'
export default {
  mounted() {
    this.retrieve({'status': 'asc'}, {column: 'status', value: ''}, false)
  },
  data() {
    return {
      editId: null,
      user: AUTH.user,
      activeSortTitle: null,
      reservee: null,
      datetime: null,
      status: null,
      guest: null,
      data: [],
      category: [{
        title: 'Bookings',
        sorting: [{
          title: 'Status ascending',
          payload: 'status',
          payload_value: 'asc',
          type: 'text'
        }, {
          title: 'Status descending',
          payload: 'status',
          payload_value: 'desc',
          type: 'text'
        }, {
          title: 'Date of reservation ascending',
          payload: 'datetime',
          payload_value: 'asc',
          type: 'date'
        }, {
          title: 'Date of reservation descending',
          payload: 'datetime',
          payload_value: 'desc',
          type: 'date'
        }]
      }],
      currentFilter: null,
      currentSort: null,
      offset: 0,
      limit: 6,
      id: null,
      synqt: null,
      reservationStatus: false,
      click: false
    }
  },
  components: {
    'filter-product': require('components/increment/ecommerce/filter/Product.vue'),
    'empty': require('components/increment/generic/empty/Empty.vue'),
    'confirmation': require('components/increment/generic/modal/Confirmation.vue')
  },
  methods: {
    retrieve(sort = null, filter = null, flag = null){
      if(flag === true) {
        this.offset += this.limit
      }
      if(filter !== null){
        this.currentFilter = filter
      }
      if(sort !== null){
        this.currentSort = sort
      }
      let parameter = {
        condition: [{
          value: this.user.merchant.id,
          column: 'merchant_id',
          clause: '='
        }, {
          value: this.user.merchant.id,
          column: 'merchant_id',
          clause: '='
        }, {
          value: this.currentFilter.value ? '%' + this.currentFilter.value + '%' : '%%',
          column: this.currentFilter.column,
          clause: 'like'
        }],
        limit: flag ? this.limit : this.offset + this.limit,
        offset: flag ? this.offset : 0,
        sort: sort
      }
      $('#loading').css({'display': 'block'})
      console.log(flag)
      this.APIRequest('reservations/retrieve_web', parameter).then(response => {
        $('#loading').css({'display': 'none'})
        if(flag === true) {
          response.data.forEach(element => {
            this.data.push(element)
          })
        } else {
          this.data = response.data
        }
      })
    },
    update(){
      let parameter = {
        id: this.editId,
        status: this.status
      }
      $('#loading').css({'display': 'block'})
      this.APIRequest('reservations/update', parameter).then(response => {
        $('#loading').css({'display': 'none'})
        if(response.data !== null){
          $('#editBooking').modal('hide')
          this.APIRequest('synqts/update', {id: this.synqt, status: this.status}).then(response => {
            console.log(response)
          })
          this.retrieve({'status': 'asc'}, {column: 'status', value: ''}, false)
        }
      })
    },
    remove(){
      let parameter = {
        id: this.id
      }
      $('#loading').css({'display': 'block'})
      this.APIRequest('reservations/delete', parameter).then(response => {
        $('#loading').css({'display': 'none'})
        if(response.data !== null){
          this.retrieve({'datetime': 'asc'}, {column: 'datetime', value: ''}, false)
        }
      })
    },
    showModal(item) {
      this.reservee = item.reservee
      this.datetime = item.datetime
      this.status = item.status
      this.guest = item.members ? item.members.length : 0
      this.editId = item.id
      this.synqt = item.payload_value
      this.reservationStatus = item.status
      console.log(this.reservationStatus)
      $('#editBooking').modal('show')
    },
    hideModal() {
      $('#editBooking').modal('hide')
    },
    removeItem(item) {
      this.id = item.id
      $('#connectionError').modal('show')
    },
    toggleCode(){
      this.click = !this.click
      console.log(this.click)
    }
  }
}
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
</script>
