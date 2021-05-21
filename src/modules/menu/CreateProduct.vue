<template>
  <div>
    <button class="btn btn-primary pull-right" data-toggle="modal" @click="title = null, description = null" data-target="#createProductModal" style="margin-bottom: 25px; float:right"><i class="fa fa-plus"></i> New Product
    </button>
    <div class="modal fade" id="createProductModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-md" role="document">
        <div class="modal-content">
          <div class="modal-header bg-primary">
            <h5 class="modal-title" id="exampleModalLabel">New Product</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="text-white">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <span v-if="errorMessage !== null" class="text-danger text-center">
                <label><b>Opps! </b>{{errorMessage}}</label>
            </span>
            <br v-if="errorMessage !== null">
            <br>
            <div class="form-group">
              <label for="exampleInputEmail1">Product Name</label>
              <input type="text" class="form-control" placeholder="Type name of product here..." v-model="title">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Description</label>
              <input type="text" class="form-control" placeholder="Type description here..." v-model="description">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Cuisine</label>
              <input type="text" class="form-control" placeholder="Type cuisine here..." v-model="type">
            </div>
            <!-- <div class="form-group">
              <input class="form-check-input" type="checkbox" v-model="option" id="defaultCheck1" style="margin-left: 0px;">
              <label class="form-check-label" for="defaultCheck1">
                Create as Bundled Product
              </label>
            </div> -->
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#createProductModal" @click="cancel()">Cancel</button>
              <button type="button" class="btn btn-primary" @click="submit()">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";

.bg-primary{
  background: $primary !important;
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
  },
  data(){
    return {
      user: AUTH.user,
      config: CONFIG,
      errorMessage: null,
      title: null,
      description: null,
      option: false,
      common: COMMON,
      type: null
    }
  },
  props: ['params'],
  methods: {
    redirect(parameter){
      ROUTER.push(parameter)
    },
    submit(){
      if(this.user.merchant === null){
        this.errorMessage = 'Empty Merchant! Go to My Profile then Merchant Settings.'
        return false
      }
      if(this.validate()){
        let parameter = {
          account_id: this.user.userID,
          title: this.title,
          description: this.description,
          status: 'pending',
          merchant_id: this.user.merchant.id,
          inventory_type: 'all',
          type: this.type
        }
        $('#loading').css({display: 'block'})
        this.APIRequest('products/create', parameter).then(response => {
          $('#loading').css({display: 'none'})
          if(response.data > 0){
            this.retrieve(response.data)
          }
        })
      }
    },
    retrieve(id){
      let parameter = {
        condition: [{
          value: id,
          column: 'id',
          clause: '='
        }],
        account_id: this.user.userID,
        inventory_type: this.common.ecommerce.inventoryType
      }
      this.APIRequest('products/retrieve', parameter).then(response => {
        if(response.data.length > 0){
          this.title = null
          this.description = null
          $('#createProductModal').modal('hide')
          this.redirect('/product/edit/' + response.data[0].code)
        }
      })
    },
    validate(){
      if(this.title === null || this.title === ''){
        this.errorMessage = 'Title is required.'
        return false
      }
      if(this.description === '' || this.description === null){
        this.errorMessage = 'Description is required.'
        return false
      }
      if(typeof this.common.ecommerce.productTitleLimit !== undefined && typeof this.common.ecommerce.productTitleLimit !== 'undefined' && this.title.length > this.common.ecommerce.productTitleLimit){
        this.errorMessage = 'Product title length should not exceed to ' + this.common.ecommerce.productTitleLimit + ' characters.'
        return false
      }
      return true
    },
    cancel(){
      this.title = ''
      this.description = ''
      // this.option = false
    }
  }
}
</script>
