import config from 'src/config.js'
let APP_EMAIL = 'support@siml.ph'
export default {
  sidebarMenu: [
    {accountType: 'ALL', showOnAdmin: true, accountStatus: 'ALL', description: 'Dashboard', icon: 'fa fa-home', path: 'dashboard', flag: false, subMenu: null},
    {accountType: 'ALL', showOnAdmin: true, accountStatus: 'ALL', description: 'Menu', icon: 'fa fa-bars', path: 'products', flag: false, subMenu: null},
    {accountType: 'ALL', showOnAdmin: true, accountStatus: 'ALL', description: 'Bookings', icon: 'fa fa-bookmark', path: 'bookings', flag: false, subMenu: null},
    {accountType: 'ALL', showOnAdmin: true, accountStatus: 'ALL', description: 'Accounts', icon: 'fa fa-users', path: 'accounts', flag: false, subMenu: null}
  ],
  menuOff: [
    {id: 1, users: 'ALL', parent_id: 0, description: 'Dashboard', icon: 'fa fa-tachometer', path: 'dashboard', flag: false, subMenu: null}
  ],
  APP_NAME: 'SynQT',
  APP_NAME_HTML: 'SynQT',
  APP_EMAIL: APP_EMAIL,
  APP_SITE: 'https://wearesiml.com',
  COMPANY: 'SynQT',
  COMPANY_URL: 'http://wearesiml.ltd',
  COPYRIGHT: 'SynQT ' + new Date().getFullYear(),
  USER_TYPE: [{
    title: 'USER'
  }],
  profileMenu: [
    {
      title: 'My Profile',
      icon: 'fa fa-cog',
      route: '/profile'
    }],
  USER_TYPE_SETTING: false,
  plan: false,
  broadcastingFlag: true,
  header: ['status', 'notification'], // 'messenger', '',
  settingsMenu: [
    {title: 'Profile', type: 'profile', allowed: ['cellular_number', 'address']},
    {title: 'Account', type: 'account', allowed: []},
    {title: 'Business Setting', type: 'merchant', allowed: ['prefix', 'website', 'address', 'schedule']}
  ],
  ecommerce: {
    inventoryType: 'all',
    editProductMenu: [{
      title: 'Inventory',
      flag: true
    }, {
      title: 'Bundled Products',
      flag: false
    },
    {
      title: 'Other Details',
      flag: false
    }],
    productUnits: ['Litres (L)', 'Millilitres (ml)', 'Kilograms (kg)', 'Grams (g)'],
    productTitleLimit: 100
  }
}
