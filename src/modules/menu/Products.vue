<template>
  <div style="margin: 56px;">

      <create></create>

      <filter-product v-bind:category="category" 
      :activeCategoryIndex="0"
      :activeSortingIndex="0"
      @changeSortEvent="retrieve($event.sort, $event.filter)"
      :grid="['list']">
    </filter-product>

    <table v-if="data.length > 0" class="table table-bordered table-responsive">
      <thead>
        <tr>
          <td>Title
            <i class="fas fa-chevron-up pull-right action-link" @click="sortArrayTitle('desc')" v-if="activeSortTitle === 'asc'"></i>
            <i class="fas fa-chevron-down  pull-right action-link" @click="sortArrayTitle('asc')" v-if="activeSortTitle === 'desc'"></i>
          </td>
          <td>Type</td>
          <td>Status</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody v-if="data">
        <tr v-for="(item, index) in data" :key="index">
          <td>
            {{item.name}}
          </td>
          <td>{{item.type}}</td>
          <td>{{item.status}}</td>
          <td>
            <button class="btn btn-primary" @click="update()">EDIT</button>
            <button class="btn btn-danger" @click="removeItem()">DELETE</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="modal fade" id="updateProduct" tabindex="-1" role="dialog" aria-labelledby="updateProduct" aria-hidden="true">
      <div class="modal-dialog modal-md" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Update Product</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="exampleInputEmail1">Product Name</label>
              <input type="text" class="form-control" placeholder="Type name of product here...">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Description</label>
              <input type="text" class="form-control" placeholder="Type description here...">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary">Update</button>
          </div>
        </div>
      </div>
    </div>
    <confirmation
    :title="'Confirmation Modal'"
    :message="'Are you sure you want to delete ?'"
    ref="confirms"
    @onConfirm="remove(id)"
    >
    </confirmation>
    <empty v-if="data.length === 0" :title="title" :action="guide"></empty>
  </div>
</template>
<style>
.underline-on-hover:hover{
  cursor: pointer;
  text-decoration: underline;
}
.btn-warning:hover{
  color: #fff !important;
}
</style>
<script>
import ROUTER from 'src/router'
import AUTH from 'src/services/auth'
import CONFIG from 'src/config.js'
import axios from 'axios'
import COMMON from 'src/common.js'
export default {
  mounted(){
    this.retrieve({'title': 'asc'}, {column: 'title', value: ''})
  },
  data(){
    return {
      data: [],
      user: AUTH.user,
      config: CONFIG,
      productId: null,
      sorted: [],
      activePage: 'all',
      title: 'Empty Products!',
      guide: 'No activity at the moment.',
      activeSortTitle: 'asc',
      activeSortInventory: 'asc',
      category: [{
        title: 'Products',
        sorting: [{
          title: 'Name ascending',
          payload: 'name',
          payload_value: 'asc',
          type: 'text'
        }, {
          title: 'Name descending',
          payload: 'name',
          payload_value: 'desc',
          type: 'text'
        }, {
          title: 'Type ascending',
          payload: 'type',
          payload_value: 'asc',
          type: 'text'
        }, {
          title: 'Type descending',
          payload: 'type',
          payload_value: 'desc',
          type: 'text'
        }, {
          title: 'Status ascending',
          payload: 'status',
          payload_value: 'asc',
          type: 'text'
        }, {
          title: 'Status descending',
          payload: 'status',
          payload_value: 'desc',
          type: 'text'
        }]
      }],
      currentFilter: null,
      currentSort: null,
      offset: 0,
      limit: 6
    }
  },
  components: {
    'filter-product': require('components/increment/imarketvue/filter/Product.vue'),
    'empty': require('components/increment/generic/empty/Empty.vue'),
    'confirmation': require('components/increment/generic/modal/Confirmation.vue'),
    'create': require('components/increment/imarketvue/product/Create.vue')
  },
  props: ['type'],
  watch: {
    data (to, from){
      this.filterBy('all')
    }
  },
  methods: {
    retrieve(sort = null, filter = null){
      console.log(this.user)
      if(filter !== null){
        this.currentFilter = filter
      }
      if(sort !== null){
        this.currentSort = sort
      }
      let parameter = {
        condition: [{
          value: this.currentFilter.value + '%',
          column: this.currentFilter.column,
          clause: 'like'
        }, {
          value: this.user.subAccount.id,
          column: 'merchant_id',
          clause: '='
        }],
        account_id: this.user.userID,
        sort: this.currentSort,
        limit: this.limit,
        offset: this.offset,
        inventory_type: 'all',
        product_type: 'inventory'
      }
      $('#loading').css({'display': 'block'})
      this.APIRequest('products/retrieve', parameter).then(response => {
        $('#loading').css({'display': 'none'})
        if(response.data.length > 0){
          this.data = response.data
        }
      })
    },

    sortArrayTitle(sort){
      this.activeSortTitle = sort
      if(sort === 'desc'){
        this.data = this.data.sort((a, b) => {
          return a.title < b.title ? -1 : 1
        })
      }else{
        this.data = this.data.sort((a, b) => {
          return a.title > b.title ? -1 : 1
        })
      }
    },
    sortArrayInventory(sort){
      this.activeSortInventory = sort
      if(sort === 'desc'){
        this.data = this.data.sort((a, b) => {
          return a.qty < b.qty ? -1 : 1
        })
      }else{
        this.data = this.data.sort((a, b) => {
          return a.qty > b.qty ? -1 : 1
        })
      }
    },
    redirect(parameter){
      ROUTER.push(parameter)
    },
    filterBy(type){
      this.activePage = type
      if(type === 'all'){
        this.sorted = this.data
      }else{
        this.sorted = this.data.filter((item) => {
          if(item.type === type){
            return item
          }
        })
      }
    },
    removeItem() {
      $('#connectionError').modal('show')
    }
  }
}
</script>
