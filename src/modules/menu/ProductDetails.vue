<template>
  <div style="margin: 56px;">
    <div class="title">
      <b @click="redirect('/products')">
        <label class="text-primary action-link">Back to Menu / Products</label>
      </b>
      <!-- <label class="text-primary"> {{data.title}}</label> -->
    </div>
    <div class="product-item-holder">
      <div class="product-item-details">
        <div v-if="errorMessage !== null">
          <label class="text-danger">Opps! {{errorMessage}}</label>
        </div>
        <div class="product-item-title">
          <label>Title <label class="text-danger">*</label></label>
          <br>
          <input type="text" class="form-control form-control-custom" v-model="title" placeholder="Type product title here...">
        </div>
        <div class="product-item-title">
          <label>Description <label class="text-danger">*</label></label>
          <br>
          <textarea class="form-control" rows="8" v-model="description" placeholder="Type product description here..."></textarea>
        </div>
        <div class="product-item-title">
          <label>Tags</label>
          <br>
          <input type="text" class="form-control form-control-custom" v-model="tags" placeholder="Separate tags with ,">
        </div>
        <div class="product-item-title">
          <label>SKU</label>
          <br>
          <input type="text" class="form-control form-control-custom" v-model="sku" placeholder="Type product sku here...">
        </div>
        <div class="product-item-title">
          <label>Status</label>
          <br>
          <select class="form-control form-control-custom" v-model="status">
            <option value="pending">Pending</option>
            <option value="published">Published</option>
          </select>
        </div>
        <div class="product-item-title">
          <button class="btn btn-danger" @click="showConfirmationModal()" style="margin-top: 5px;">Delete</button>
          <button class="btn btn-primary pull-right" @click="updateProduct()" style="margin-right: 2px; margin-top: 5px;">Update</button>
          <button class="btn btn-warning pull-right" style="margin-right: 10px; margin-top: 5px;">Preview</button>
        </div>
        </div>
        <div class="product-image" style="position: relative;">
          <div class="product-row" style="text-align: left !important;">
            <label style="width: 100%">
              <label style="width: 70%">Featured Image</label>
              <button class="btn btn-primary pull-right" @click="showImages('featured')">Select</button>
            </label>
          </div>
      <!-- <img :src="config.BACKEND_URL + selectedImage" class="main-image" v-if="selectedImage !== null"> -->
      <!-- <img :src="config.BACKEND_URL + data.featured[0].url" class="main-image" v-if="selectedImage === null && data.featured !== null"> -->
          <i class="fa fa-image" v-if="selectedImage === null"></i>
          <label class="remove-image text-danger" id="featured-image-remove" @click="removeImage()" v-if="selectedImage === null">
            <i class="fa fa-times"></i>
          </label>
          <div class="images-holder">
            <div class="product-row" style="text-align: left !important;">
              <label style="width: 100%">
                <label style="width: 70%">Other Images</label>
                <button class="btn btn-primary pull-right" @click="showImages('images')">Select</button>
              </label>
            </div>
          </div>
        </div>
      <browse-images-modal></browse-images-modal>
    </div>
    <!-- <confirmation ref="confirmationModal" :title="'Confirmation Message'" :message="'Are you sure you want delete this product?'" @onConfirm="deleteProduct($event.id)"></confirmation> -->
  </div>
</template>
<style scoped>
.title {
  width: 95%;
  float: left;
  margin-left: 2%;
  font-size: 16px;
}
.product-item-holder {
  width: 98%;
  float: left;
  margin-left: 2%;
  min-height: 10px;
  overflow-y: hidden;
}
.product-image {
  width: 36%;
  float: left;
  margin-left: 2%;
  margin-right: 2%;
  min-height: 410px;
  overflow-y: hidden;
  text-align: center;
}
.product-image .main-image {
  height: 350px;
  max-width: 100%;
}
.product-image .fa-image {
  font-size: 250px;
  line-height: 350px;
}
.product-image .image-item {
  height: 60px;
  float: left;
  width: 80px;
  text-align: center;
}
.product-image .other-image {
  height: 60px;
  max-width: 100%;
}
.product-image .image-item:hover {
  cursor: pointer;
  background: #ffaa81;
}
.images-holder .overlay {
  height: 60px;
  z-index: 2;
  width: 80px;
  margin-top: -60px;
  float: left;
  background: rgba(0, 0, 0, 0);
}
.images-holder {
  width: 100%;
  float: left;
  min-height: 60px;
  overflow-y: hidden;
}
.product-item-details {
  min-height: 50px;
  width: 60%;
  float: left;
  overflow-y: hidden;
  border: 0px;
}
.product-item-title {
  width: 100%;
  float: left;
  min-height: 50px;
  overflow-y: hidden;
  margin-top: 15px;
}
.product-item-title label {
  font-weight: 600;
}
.product-row {
  width: 100%;
  float: left;
  min-height: 40px;
  overflow-y: hidden;
  font-weight: 600;
  font-size: 16px;
  line-height: 40px;
}
.product-row-tags {
  width: 100%;
  float: left;
  min-height: 40px;
  overflow-y: hidden;
  font-weight: 600;
  line-height: 40px;
}
.product-row-rating {
  width: 100%;
  float: left;
  min-height: 40px;
  overflow-y: hidden;
  font-size: 16px;
  line-height: 40px;
}
.product-row label {
  float: left;
  width: 15%;
}
.qty-input {
  width: 50px;
  height: 40px;
  float: left;
  border-radius: 5px;
  border: solid 1px #ffaa81;
  text-align: center !important;
}
.product-row-tags label {
  float: left;
}
.tag-label {
  height: 35px;
  line-height: 35px;
  background: #ffaa81;
  padding-left: 10px;
  padding-right: 10px;
  color: #fff;
  margin-right: 5px;
  border-radius: 5px;
  margin-top: 2px;
}
.attribute {
  width: 50px;
  height: 40px;
  float: left;
  border-radius: 5px;
  border: solid 1px #ffaa81;
  margin-right: 5px;
}
.attribute:hover {
  cursor: pointer;
}
.product-more-details {
  width: 96%;
  float: left;
  margin-bottom: 100px;
  min-height: 50px;
  overflow-y: hidden;
  margin-left: 2%;
  margin-right: 2%;
  border-top: solid 1px #ffaa81;
  margin-top: 25px;
}
.product-more-details .details-holder {
  width: 60%;
  float: left;
  min-height: 10px;
  overflow-y: hidden;
  margin-top: 25px;
}

.product-more-details .details-holder-bundled {
  width: 100%;
  float: left;
  min-height: 10px;
  overflow-y: hidden;
  margin-top: 25px;
}

.product-menu {
  list-style: none;
  padding: 0px;
  margin: 0;
  width: 60%;
  margin-right: 40%;
  float: left;
  color: #fff;
}
.product-menu li {
  height: 50px;
  float: left;
  width: 25%;
  line-height: 50px;
  padding-left: 10px;
  font-weight: 600;
  border-right: solid 1px #fff;
  background: #ffaa81;
}
.product-menu li:hover {
  cursor: pointer;
  color: #000;
}
.menu-active {
  color: #000;
}
.show-prices:hover {
  cursor: pointer;
  color: #ffaa81;
}
.form-control-custom {
  height: 50px !important;
}

.remove-image {
  position: absolute;
}

#featured-image-remove {
  top: 50px;
  right: 5px;
  z-index: 1000;
  font-size: 24px;
}

#other-images-remove {
  top: -20px;
  right: 0px;
  z-index: 1000;
  font-size: 18px;
}

.remove-image:hover {
  cursor: pointer;
}

@media (max-width: 992px) {
  .product-item-details,
  .product-image,
  .product-more-details .details-holder,
  .product-menu {
    width: 100%;
  }
}
</style>
<script>
import ROUTER from 'src/router'
import AUTH from 'src/services/auth'
import CONFIG from 'src/config.js'
import COMMON from 'src/common.js'
import axios from 'axios'
export default {
  mounted() {
    // this.retrieve()
  },
  data() {
    return {
      user: AUTH.user,
      config: CONFIG,
      errorMessage: null,
      data: null,
      code: this.$route.params.code,
      prevMenuIndex: 0,
      selectedImage: null,
      qty: 1,
      priceFlag: false,
      newImage: {
        product_id: null,
        url: null,
        status: null
      },
      imageStatus: null,
      common: COMMON,
      newAttribute: {
        product_id: null,
        payload: null,
        payload_value: null
      },
      title: null,
      description: null,
      tags: null,
      sku: null,
      status: null
    }
  },
  computed: {
    productMenu: function () {
      if (this.data !== null) {
        return this.data.type === 'regular' ? [{title: 'Inventory', flag: true}] : ''
      }
    }
  },
  components: {
    'ratings': require('components/increment/generic/rating/Ratings.vue'),
    'product-comments': require('components/increment/generic/comment/Comments.vue'),
    'browse-images-modal': require('components/increment/generic/image/BrowseModal.vue'),
    'variations': require('components/increment/ecommerce/product/Variations.vue'),
    'bundled-products': require('components/increment/ecommerce/product/BundledProducts.vue'),
    'prices': require('components/increment/ecommerce/product/Prices.vue'),
    'confirmation': require('components/increment/generic/modal/Confirmation.vue')
  },
  methods: {
    redirect(parameter) {
      ROUTER.push(parameter)
    },
    selectMenu(index) {
      if (this.prevMenuIndex !== index) {
        this.productMenu[this.prevMenuIndex].flag = false
        this.productMenu[index].flag = true
        this.prevMenuIndex = index
        this.selectedMenu = this.productMenu[index]
      }
    },
    showConfirmationModal(id) {
      this.$refs.confirmationModal.show(id)
    },
    selectImage(url) {
      this.selectedImage = url
    },
    retrieve() {
      let parameter = {
        condition: [
          {
            value: this.code,
            column: 'code',
            clause: '='
          }
        ],
        account_id: this.user.userID
      }
      $('#loading').css({ display: 'block' })
      this.APIRequest('products/retrieve', parameter).then((response) => {
        $('#loading').css({ display: 'none' })
        if (response.data.length > 0) {
          this.data = response.data[0]
        }
      })
    },
    deleteProduct(id) {
      let parameter = {
        id: id
      }
      $('#loading').css({ display: 'block' })
      this.APIRequest('products/delete', parameter).then((response) => {
        $('#loading').css({ display: 'none' })
        ROUTER.push('/products')
      })
    },
    validate() {
      this.errorMessage = null
      if (this.data.title === null || this.data.title === '') {
        this.errorMessage = 'Title is required.'
        return false
      }
      if (this.data.description === '' || this.data.description === null) {
        this.errorMessage = 'Description is required.'
        return false
      }
      if (
        typeof this.common.ecommerce.productTitleLimit !== undefined &&
        typeof this.common.ecommerce.productTitleLimit !== 'undefined' &&
        this.data.title.length > this.common.ecommerce.productTitleLimit
      ) {
        this.errorMessage =
          'Product title length should not exceed to ' +
          this.common.ecommerce.productTitleLimit +
          ' characters.'
        return false
      }
      return true
    },
    updateProduct() {
      if (this.validate() === false) {
        return
      }
      this.APIRequest('products/update', this.data).then((response) => {
        if (this.common.ecommerce.productUnits !== null) {
          if (this.data.variation !== null) {
            this.updateAttribute(this.data.variation[0])
          } else {
            this.createAttribute()
          }
        } else {
          this.retrieve()
        }
        ROUTER.push(AUTH.redirectRoute(this.user.type))
      })
    },
    createAttribute() {
      if (
        this.newAttribute.payload_value !== null &&
        this.newAttribute.payload_value !== '' &&
        parseInt(this.newAttribute.payload_value) > 0
      ) {
        this.newAttribute.product_id = this.data.id
        this.APIRequest('product_attributes/create', this.newAttribute).then(
          (response) => {
            if (response.data > 0) {
              this.newAttribute.payload_value = null
              this.errorMessage = null
              this.retrieve()
            }
          }
        )
      } else {
        this.retrieve()
      }
    },
    updateAttribute(item) {
      if (
        item.payload_value !== null &&
        item.payload_value !== '' &&
        parseInt(item.payload_value) > 0
      ) {
        this.APIRequest('product_attributes/update', item).then((response) => {
          if (response.data === true) {
            this.retrieve()
          }
        })
      } else {
        this.retrieve()
      }
    },
    showImages(status) {
      this.imageStatus = status
      $('#browseImagesModal').modal('show')
    },
    createPhoto(url) {
      if (this.imageStatus === 'featured') {
        this.newImage.status = 'featured'
        if (this.data.featured === null) {
          this.newImage.product_id = this.data.id
          this.newImage.url = url
          this.createRequest(this.newImage)
        } else {
          this.data.featured[0].url = url
          this.updateRequest(this.data.featured[0])
        }
      } else if (this.imageStatus === 'images') {
        this.newImage.status = 'others'
        this.newImage.product_id = this.data.id
        this.newImage.url = url
        this.createRequest(this.newImage)
      }
    },
    createRequest(parameter) {
      this.APIRequest('product_images/create', parameter).then((response) => {
        this.retrieve()
      })
    },
    updateRequest(parameter) {
      this.APIRequest('product_images/update', parameter).then((response) => {
        this.retrieve()
      })
    },
    manageImageUrl(url) {
      this.createPhoto(url)
    },
    removeImage(id) {
      let parameter = {
        id: id
      }
      this.APIRequest('product_images/delete', parameter).then((response) => {
        this.retrieve()
        this.selectedImage = null
      })
    }
  }
}
</script>
