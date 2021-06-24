<template>
  <div style="margin: 56px;">
    <h4 style="margin-bottom: 40px">Today's Reservation: {{data.length}}</h4>
    <!-- <filter-product v-bind:category="category" 
      :activeCategoryIndex="0"
      :activeSortingIndex="0"
      @changeSortEvent="retrieve($event.sort, $event.filter)"
      :grid="['list']">
    </filter-product> -->
    <table v-if="data.length > 0" class="table table-bordered table-responsive">
      <thead>
        <tr>
          <td>Reservee
            <i class="fas fa-chevron-up pull-right action-link" @click="sortArrayTitle('desc')" v-if="activeSortTitle === 'asc'"></i>
            <i class="fas fa-chevron-down  pull-right action-link" @click="sortArrayTitle('asc')" v-if="activeSortTitle === 'desc'"></i>
          </td>
          <td>Date of Reservation</td>
          <td>No. of Guest</td>
        </tr>
      </thead>
      <tbody v-if="data.length > 0 ">
        <tr v-for="(item, index) in data" :key="index">
          <td>
            {{item.reservee}}
          </td>
          <td>{{item.date_time_at_human}}</td>
          <td>{{item.members ? item.members.length : 0}}</td>
        </tr>
      </tbody>
    </table>
    <button v-if="data !== null && data.length === limit" class="btn btn-primary pull-right" style="margin-bottom: 25px;" @click="retrieve(currentSort, currentFilter, true)">See More</button>
    <empty v-if="data.length === 0" :title="'No reservations for today!'" :action="'No activity at the moment.'"></empty>
  </div>
</template>
<script>
import AUTH from 'src/services/auth'
import moment from 'moment'
export default {
  mounted() {
    this.retrieve({'datetime': 'asc'}, {column: 'datetime', value: ''}, false)
  },
  data() {
    return {
      user: AUTH.user,
      activeSortTitle: null,
      data: [],
      category: [{
        title: 'Bookings',
        sorting: [{
          title: 'Date of reservation ascending',
          payload: 'datetime',
          payload_value: 'asc',
          type: 'text'
        }, {
          title: 'Date of reservation descending',
          payload: 'datetime',
          payload_value: 'desc',
          type: 'text'
        }]
      }],
      offset: 0,
      limit: 6,
      currentFilter: null,
      currentSort: null
    }
  },
  components: {
    'empty': require('components/increment/generic/empty/Empty.vue'),
    'filter-product': require('components/increment/imarketvue/filter/Product.vue')
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
          value: `%${moment(new Date()).format('YYYY-MM-DD')}%`,
          column: 'datetime',
          clause: 'like'
        }, {
          value: 'pending',
          column: 'status',
          clause: '='
        }, {
          value: '%%',
          column: 'details',
          clause: 'like'
        }],
        limit: this.limit,
        offset: this.offset,
        sort: {datetime: 'asc'}
      }
      $('#loading').css({'display': 'block'})
      this.APIRequest('reservations/retrieve_web', parameter).then(response => {
        $('#loading').css({'display': 'none'})
        if(response.data.length > 0){
          if(flag === true) {
            response.data.forEach(element => {
              this.data.push(element)
            })
          } else {
            this.data = response.data
          }
        }
      })
    }
  }
}
</script>
