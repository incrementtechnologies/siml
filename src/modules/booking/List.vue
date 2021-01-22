<template>
  <div style="margin: 56px;">
    <filter-product v-bind:category="category" 
      :activeCategoryIndex="0"
      :activeSortingIndex="0"
      @changeSortEvent="retrieve($event.sort, $event.filter)"
      :grid="['list']">
    </filter-product>
    <table v-if="data" class="table table-bordered table-responsive">
      <thead>
        <tr>
          <td>Reservee
            <i class="fas fa-chevron-up pull-right action-link" @click="sortArrayTitle('desc')" v-if="activeSortTitle === 'asc'"></i>
            <i class="fas fa-chevron-down  pull-right action-link" @click="sortArrayTitle('asc')" v-if="activeSortTitle === 'desc'"></i>
          </td>
          <td>Date of Reservation</td>
          <td>No. of Guest</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody v-if="data">
        <tr v-for="(item, index) in data" :key="index">
          <td>
            {{item.reservee}}
          </td>
          <td>{{item.date}}</td>
          <td>{{item.guest}}</td>
          <td>
            <button class="btn btn-primary" @click="showModal()">EDIT</button>
            <button class="btn btn-danger" @click="removeItem()">DELETE</button>
          </td>
        </tr>
      </tbody>
    </table>
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
            <input type="text" placeholder="Reservee" v-model="reservee" class="form-control-custom form-control" required>
          </div>
          <div class="form-group">
            <label for="name">Date of Reservation: <span>*</span></label>
            <input type="text" maxlength="150" placeholder="Date of Reservation" v-model="date" class="form-control-custom form-control" required>
          </div>
          <div class="form-group">
            <label for="name">No. of Guest: <span>*</span></label>
            <input type="text" maxlength="150" placeholder="No. of Guest" v-model="guest" class="form-control-custom form-control" required>
          </div>
          <div class="form-group">
            <label for="name">Status: <span>*</span></label>
            <br>
            <select class="form-group form-control-custom form-control" v-model="status">
              <option value="pending">Pending</option>
              <option value="published">Published</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
    </div>
    <empty v-if="data === null" :title="title" :action="guide"></empty>
    <confirmation
    :title="'Confirmation Modal'"
    :message="'Are you sure you want to delete ?'"
    ref="confirms"
    @onConfirm="remove(id)"
    >
    </confirmation>
  </div>
</template>
<script>
export default {
  data() {
    return {
      reservee: null,
      date: null,
      guest: null,
      title: 'Empty Bookings!',
      guide: 'No activity at the moment.',
      data: [{
        reservee: 'Lalaine Cabelin Garrido',
        date: '02-05-21',
        guest: 20
      }, {
        reservee: 'Lealyn Eulin',
        date: '03-10-21',
        guest: 20
      }, {
        reservee: 'Cherry Mae Herrera',
        date: '01-30-21',
        guest: 20
      }],
      category: [{
        title: 'Bookings',
        sorting: [{
          title: 'Reservee ascending',
          payload: 'reservee',
          payload_value: 'asc',
          type: 'text'
        }, {
          title: 'Reservee descending',
          payload: 'reservee',
          payload_value: 'desc',
          type: 'text'
        }, {
          title: 'Date of reservation ascending',
          payload: 'date',
          payload_value: 'asc',
          type: 'text'
        }, {
          title: 'Date of reservation descending',
          payload: 'date',
          payload_value: 'desc',
          type: 'text'
        }, {
          title: 'No. of Guest ascending',
          payload: 'guest',
          payload_value: 'asc',
          type: 'text'
        }, {
          title: 'No. of Guest descending',
          payload: 'guest',
          payload_value: 'desc',
          type: 'text'
        }]
      }]
    }
  },
  components: {
    'filter-product': require('components/increment/ecommerce/filter/Product.vue'),
    'empty': require('components/increment/generic/empty/Empty.vue'),
    'confirmation': require('components/increment/generic/modal/Confirmation.vue')
  },
  methods: {
    retrieve(sort){
      console.log('retrieve')
    },
    showModal() {
      $('#editBooking').modal('show')
    },
    hideModal() {
      $('#editBooking').modal('hide')
    },
    removeItem() {
      $('#connectionError').modal('show')
    }
  }
}
</script>
