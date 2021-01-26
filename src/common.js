import config from 'src/config.js'
let APP_EMAIL = 'support@siml.ph'
export default {
  sidebarMenu: [
    {accountType: 'ALL', showOnAdmin: true, accountStatus: 'ALL', description: 'Dashboard', icon: 'fa fa-home', path: 'dashboard', flag: false, subMenu: null},
    {accountType: 'ALL', showOnAdmin: true, accountStatus: 'ALL', description: 'Menu', icon: 'fa fa-bars', path: 'menus', flag: false, subMenu: null},
    {accountType: 'ALL', showOnAdmin: true, accountStatus: 'ALL', description: 'Bookings', icon: 'fa fa-bookmark', path: 'bookings', flag: false, subMenu: null},
    {accountType: 'ALL', showOnAdmin: true, accountStatus: 'ALL', description: 'Accounts', icon: 'fa fa-users', path: 'accounts', flag: false, subMenu: null}
  ],
  menuOff: [
    {id: 1, users: 'ALL', parent_id: 0, description: 'Dashboard', icon: 'fa fa-tachometer', path: 'dashboard', flag: false, subMenu: null}
  ],
  APP_NAME: 'SIML',
  APP_NAME_HTML: 'SIML',
  APP_EMAIL: APP_EMAIL,
  APP_SITE: 'https://wearesiml.com',
  COMPANY: 'SIML',
  COMPANY_URL: 'http://wearesiml.ltd',
  COPYRIGHT: 'SIML ' + new Date().getFullYear(),
  USER_TYPE: [{
    title: 'USER'
  }],
  USER_TYPE_SETTING: false,
  plan: false,
  broadcastingFlag: true,
  header: ['status', 'notification'], // 'messenger', '',
  settingsMenu: [
    {title: 'Profile', type: 'profile', allowed: ['cellular_number', 'address', 'sex', 'birth_date']},
    // {title: 'Educations', type: 'educations', allowed: []},
    // {title: 'Work Experience', type: 'work-experience', allowed: []},
    // {title: 'Idenfication Cards', type: 'identifications', allowed: []},
    // {title: 'Guarantor', type: 'guarantor', allowed: []},
    {title: 'Account', type: 'account', allowed: []},
    // {title: 'Payment Accounts', type: 'payment_method', allowed: []},
    // {title: 'Billing Information', type: 'billing_information', allowed: []},
    {title: 'Business Setting', type: 'merchant', allowed: ['prefix']},
    {title: 'Notifications', type: 'notification', allowed: []},
    {title: 'Educational Background', type: 'educations', allowed: []},
    {title: 'Work Experiences', type: 'work-experience', allowed: []},
    {title: 'Identifications', type: 'identifications', allowed: []},
    {title: 'Guarantor', type: 'guarantor', allowed: []}
  ]
}
