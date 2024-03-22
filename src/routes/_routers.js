import React from 'react'
import Page404 from '../containers/Page404NotFound/Page404'

const UserDashboard = React.lazy(() => import('../containers/UserPages/HomePage/index'))
// user profile 
const MyProfile = React.lazy(() => import('../containers/UserPages/UserProfilePage/User.MyProfile'))
const UpDateProfile = React.lazy(() => import('../containers/UserPages/UserProfilePage/User.UpdateProfile'))
const UpDatePassword = React.lazy(() => import('../containers/UserPages/UserProfilePage/User.UpdatePassword'))
const UpDateTrxPassword = React.lazy(() => import('../containers/UserPages/UserProfilePage/User.UpdateTrxPassword'))
const UpDateEmail = React.lazy(() => import('../containers/UserPages/UserProfilePage/User.UpdateEmail'))
const EditWallet = React.lazy(() => import('../containers/UserPages/UserProfilePage/User.UpdateWallet'))
// wallet section 
const wallet = React.lazy(() => import('../containers/UserPages/Wallet/Wallet'))
const DepositFund = React.lazy(() => import('../containers/UserPages/Wallet/DepositFund'))
const DepositHistory = React.lazy(() => import('../containers/UserPages/Wallet/DepositFundHistory'))
const FundReceivingHistory = React.lazy(() => import('../containers/UserPages/Wallet/FundReceivingHistory'))
// Team section
const DirectTeam = React.lazy(() => import('../containers/UserPages/MyTeamPage/Team.DirectTeamPage'))
const LevelTeam = React.lazy(() => import('../containers/UserPages/MyTeamPage/Team.LevelTeam'))
// topUp section
const TopUpAccount = React.lazy(() => import('../containers/UserPages/TopupPage/Topup.AccountTopupPage'))
const AutopoolEnter = React.lazy(() => import('../containers/UserPages/TopupPage/Topup.autopoolEnter'))
const TopUpHistory = React.lazy(() => import('../containers/UserPages/TopupPage/Topup.TopupHistoryPage'))
const UpgradeAutoPool = React.lazy(() => import('../containers/UserPages/TopupPage/UpgradeAutoPool'))
const UpgradeAutoPoolHistory = React.lazy(() => import('../containers/UserPages/TopupPage/UpgradeAutoPoolHistory'))
const UserBoosterIncome = React.lazy(() => import('../containers/UserPages/TopupPage/BoosterIncome'))
const BoosterUpgradeHistory = React.lazy(() => import('../containers/UserPages/TopupPage/BoosterUpgradeHistory'))
const AutoTradeUpgrade = React.lazy(() => import('../containers/UserPages/TopupPage/AutoTradeUpgrade'))
const AutoTradeUpgradeHistory = React.lazy(() => import('../containers/UserPages/TopupPage/AutoTradeUpgradeHistory'))
const AutoTradeUserTopup = React.lazy(() => import('../containers/UserPages/TopupPage/AutoTradeUserTopup'))
const AutoTradeUserTopupHistory = React.lazy(() => import('../containers/UserPages/TopupPage/AutoTradeUserTopupHistory'))
// earning section
const EarningStatistics = React.lazy(() => import('../containers/UserPages/Earnings/EarningStatistics'))
const DirectIncome = React.lazy(() => import('../containers/UserPages/Earnings/Earning.DirectIncome'))
const IndirectIncome = React.lazy(() => import('../containers/UserPages/Earnings/Earning.IndirectIncome'))
const AutoPoolIncome = React.lazy(() => import('../containers/UserPages/Earnings/Earning.AutoPoolIncome'))
const BonanzaAchieve = React.lazy(() => import('../containers/UserPages/Earnings/Earning.BonanzaAchieve'))
const BonanzaPrize = React.lazy(() => import('../containers/UserPages/Earnings/Earning.BonanzaPrize'))
// const AutoPoolIncomeV2  = React.lazy(() => import('../containers/UserPages/Earnings/Earing.AutoPoolIncomeV2'))
const BonanzaRewardIncome = React.lazy(() => import('../containers/UserPages/Earnings/Earning.BonanzaRewardIncome'))
const IncomeLevelUpdate = React.lazy(() => import('../containers/UserPages/Earnings/Earning.IncomeLevelUpdate'))
const DirectWithdrawIncome = React.lazy(() => import('../containers/UserPages/Earnings/Earning.DirectWithdrawIncome'))
const BoosterIncome = React.lazy(() => import('../containers/UserPages/Earnings/Earning.BoosterIncome'))
const GiftIncome = React.lazy(() => import('../containers/UserPages/Earnings/Earning.GiftIncome'))
const RoyaltyIncome = React.lazy(() => import('../containers/UserPages/Earnings/Earning.RoyaltyIncome'))
const BoosterUpgradeIncome = React.lazy(() => import('../containers/UserPages/Earnings/Earning.BoosterUpgradeIncome'))
const AutoTradeIncome = React.lazy(() => import('../containers/UserPages/Earnings/Earning.AutoTradeIncome'))
const AutoTradeReferral = React.lazy(() => import('../containers/UserPages/Earnings/Earning.AutoTradeReferral'))
// const AutopoolStart  = React.lazy(() => import('../containers/UserPages/Earnings/AutopoolStart'))

// withdraw section
const WithdrawFund = React.lazy(() => import('../containers/UserPages/WithdrawPage/Withdraw.WithdrawFundsPage'))
const WithdrawHistory = React.lazy(() => import('../containers/UserPages/WithdrawPage/Withdraw.ReportStatusPage'))
const AutoTradeWithdraw = React.lazy(() => import('../containers/UserPages/WithdrawPage/Withdraw.AutoTradeWithdraw'))
const AutoTradeWithdrawHistory = React.lazy(() => import('../containers/UserPages/WithdrawPage/Withdraw.AutoTradeWithdrawHistory'))

// Fund Transfer
const UserTopUp = React.lazy(() => import('../containers/UserPages/FundTransfer/UserTopUp'))
const UserTopUpHistory = React.lazy(() => import('../containers/UserPages/FundTransfer/UserTopUpHistory'))
const FundTransfer = React.lazy(() => import('../containers/UserPages/FundTransfer/FundTransferPage'))
const FundTransferHistory = React.lazy(() => import('../containers/UserPages/FundTransfer/FundTransferHistoryTable'))

// Support section 
const updates = React.lazy(() => import('../containers/UserPages/SupportPage/Support.UpdateNews'))
const supportTicket = React.lazy(() => import('../containers/UserPages/SupportPage/Support.SupportTicketPage'))
const TicketHistory = React.lazy(() => import('../containers/UserPages/SupportPage/Support.TicketHistoryPage'))
const ContactUs = React.lazy(() => import('../containers/UserPages/SupportPage/Support.ContactPage'))
const ContactUsHistory = React.lazy(() => import('../containers/UserPages/SupportPage/Support.ContactusHistory'))

/* ***************************** //admin// ************************** */
const AdminDashboard = React.lazy(() => import('../containers/AdminPages/AdminHome/AdminHome'));

// member section
const AdminTeamStatistics = React.lazy(() => import('../containers/AdminPages/AdminMemberPage/Admin.TeamStatistics'));
const AllMember = React.lazy(() => import('../containers/AdminPages/AdminMemberPage/Admin.AllMember'));
const ActiveMember = React.lazy(() => import('../containers/AdminPages/AdminMemberPage/Admin.ActiveMember'));
const BlockedMember = React.lazy(() => import('../containers/AdminPages/AdminMemberPage/Admin.BlockedMember'));

// deposit section
const AllDeposit = React.lazy(() => import('../containers/AdminPages/AdminDepositReport/Admin.AllTransaction'));
const SuccessfulDeposit = React.lazy(() => import('../containers/AdminPages/AdminDepositReport/Admin.SuccessfulTransaction'));
const RejectedDeposit = React.lazy(() => import('../containers/AdminPages/AdminDepositReport/Admin.RejectedTransaction'));

// withdraw section
const AllAutoTradeWithdraw = React.lazy(() => import('../containers/AdminPages/AdminWithdrawReport/Admin.AllAutoTradeWithdraw'));
const AllWithdraw = React.lazy(() => import('../containers/AdminPages/AdminWithdrawReport/Admin.AllWithdraw'));
const SuccessfulWithdraw = React.lazy(() => import('../containers/AdminPages/AdminWithdrawReport/Admin.SuccessfulWithdraw'));
const RejectedWithdraw = React.lazy(() => import('../containers/AdminPages/AdminWithdrawReport/Admin.RejectedWithdraw'));

// fund transfer 
const AdminFundTransfer = React.lazy(() => import('../containers/AdminPages/AdminFundTransfer/FundTransfer'));
const AdminFundTransferHistory = React.lazy(() => import('../containers/AdminPages/AdminFundTransfer/FundTransferHistory'));
const AdminALLFundTransferHistory = React.lazy(() => import('../containers/AdminPages/AdminFundTransfer/AllFundTransferHistory'));
const AdminRewardTransfer = React.lazy(() => import('../containers/AdminPages/AdminFundTransfer/RewardTransfer'));
const AdminRewardTransferHistory = React.lazy(() => import('../containers/AdminPages/AdminFundTransfer/RewardTransferHistory'));
const AdminRoyaltyIncome = React.lazy(() => import('../containers/AdminPages/AdminFundTransfer/RoyaltyIncome'));
const AdminRoyaltyIncomeHistory = React.lazy(() => import('../containers/AdminPages/AdminFundTransfer/RoyaltyIncomeHistory'));
const AdminGiftIncomeTransfer = React.lazy(() => import('../containers/AdminPages/AdminFundTransfer/GiftIncomeTransfer'));
const AdminGiftIncomeTransferHistory = React.lazy(() => import('../containers/AdminPages/AdminFundTransfer/GiftIncomeTransferHistory'));
const AdminUserTopupHistory = React.lazy(() => import('../containers/AdminPages/AdminFundTransfer/Admin.UserTopupHistory'));

// Auto Trade
const AdminAutoTradeUsers = React.lazy(() => import('../containers/AdminPages/Admin.AutoTrade/AdminAutoTrade.AutoTradeUsers'));
const AdminAutoTradeUpgradeHistory = React.lazy(() => import('../containers/AdminPages/Admin.AutoTrade/AdminAutoTrade.AutoTradeUpgradeHistory'));
const AdminAutoTradeIncomeHistory = React.lazy(() => import('../containers/AdminPages/Admin.AutoTrade/AdminAutoTrade.AutoTradeIncomeHistory'));

// admin earnings
const AdminDirectIncome = React.lazy(() => import('../containers/AdminPages/AdminEarningTrack/AdminEarning.DirectIncome'))
const AdminIndirectIncome = React.lazy(() => import('../containers/AdminPages/AdminEarningTrack/AdminEarning.IndirectIncome'))
const AdminAutoPoolIncome = React.lazy(() => import('../containers/AdminPages/AdminEarningTrack/AdminEarning.AutoPoolIncome'))
const AdminBonanzaRewardIncome = React.lazy(() => import('../containers/AdminPages/AdminEarningTrack/AdminEarning.BonanzaRewardIncome'))
const AdminBonanzaAchiever = React.lazy(() => import('../containers/AdminPages/AdminEarningTrack/AdminEarning.BonanzaAchieve'))
const AdminBonanzaPrizeList = React.lazy(() => import('../containers/AdminPages/AdminEarningTrack/AdminEarning.BonanzaPrize'))
const AdminIncomeLevelUpdate = React.lazy(() => import('../containers/AdminPages/AdminEarningTrack/AdminEarning.IncomeLevelUpdate'))
const AdminDirectWithdrawIncome = React.lazy(() => import('../containers/AdminPages/AdminEarningTrack/AdminEarning.DirectWithdrawIncome'))
const AdminBoosterIncome = React.lazy(() => import('../containers/AdminPages/AdminEarningTrack/AdminEarning.BoosterIncome'))
const AdminBoosterUpgradeIncome = React.lazy(() => import('../containers/AdminPages/AdminEarningTrack/AdminEarning.BoosterUpgradeIncome'))
const AdminBoosterController = React.lazy(() => import('../containers/AdminPages/AdminEarningTrack/AdminEarning.BoosterController'))
const AdminGiftIncome = React.lazy(() => import('../containers/AdminPages/AdminEarningTrack/AdminEarning.GiftIncome'))

// support section
const AdminCreateNews = React.lazy(() => import('../containers/AdminPages/Admin.Support/CreateNews'))
const AdminCreateUs = React.lazy(() => import('../containers/AdminPages/Admin.Support/Admin.ContactUs'))
const AdminTicketData = React.lazy(() => import('../containers/AdminPages/Admin.Support/Admin.TicketData'))

// settings section
const AdminChangePassword = React.lazy(() => import('../containers/AdminPages/Admin.Setting/Admin.ChangePassword'))
const AdminPopUpImage = React.lazy(() => import('../containers/AdminPages/Admin.Setting/PopupImage'))
const AdminVideoController = React.lazy(() => import('../containers/AdminPages/Admin.Setting/Admin.VideoController'))
const AdminPDFController = React.lazy(() => import('../containers/AdminPages/Admin.Setting/Admin.PDFController'))
const AdminAutoController = React.lazy(() => import('../containers/AdminPages/Admin.Setting/Admin.AutoPoolConttoller'))

export const routers = [
  // { path: '/user/logout', name: 'Logout', permission: ['user','admin'], component: Logout },
  /****************************user routes *****************************************/
  { path: '*', exact: true, name: 'Error', permission: ['user', 'admin'], component: Page404 },
  // Dashboard
  { path: '/', exact: true, name: 'Dashboard', permission: ['user'], component: UserDashboard },

  //###### SETTINGS CATEGORY#########################################
  // SETTINGS=>Profile Section
  { path: '/profile', name: 'Welcome', permission: ['user'], component: MyProfile, exact: true },
  { path: '/profile/my-profile', name: 'My Profile', permission: ['user'], component: MyProfile },
  { path: '/profile/update-profile', name: 'Update Profile', permission: ['user'], component: UpDateProfile },
  { path: '/profile/update-email', name: 'Update Email', permission: ['user'], component: UpDateEmail },
  { path: '/profile/update-password', name: 'Update Email', permission: ['user'], component: UpDatePassword },
  { path: '/profile/update-trxPassword', name: 'Update Email', permission: ['user'], component: UpDateTrxPassword },
  { path: '/profile/update-wallet', name: 'Update Email', permission: ['user'], component: EditWallet },

  // wallet section 
  { path: '/wallet/my-wallet', name: 'Update Email', permission: ['user'], component: wallet },
  { path: '/wallet/deposit-fund', name: 'Update Email', permission: ['user'], component: DepositFund },
  { path: '/wallet/deposit-history', name: 'Update Email', permission: ['user'], component: DepositHistory },
  { path: '/wallet/fund-receiving-history', name: 'Fund Receiving History', permission: ['user'], component: FundReceivingHistory },

  // Team section
  { path: '/team', name: 'direct team', permission: ['user'], component: DirectTeam },
  { path: '/team/direct-team', name: 'direct team', permission: ['user'], component: DirectTeam },
  { path: '/team/level-team', name: 'level team', permission: ['user'], component: LevelTeam },
  // top-up
  { path: '/topup', name: 'direct team', permission: ['user'], component: TopUpAccount },
  { path: '/topup/topup-account', name: 'direct team', permission: ['user'], component: TopUpAccount },
  { path: '/topup/autopool-enter', name: 'auto pool enter', permission: ['user'], component: AutopoolEnter },
  { path: '/topup/topup-history', name: 'direct team', permission: ['user'], component: TopUpHistory },
  { path: '/topup/upgrade-autopool', name: 'level team', permission: ['user'], component: UpgradeAutoPool },
  { path: '/topup/upgrade-autopool-history', name: 'level team', permission: ['user'], component: UpgradeAutoPoolHistory },
  { path: '/topup/upgrade-Booster-history', name: 'level team', permission: ['user'], component: BoosterUpgradeHistory },
  { path: '/topup/booster-income', name: 'User Top Up', permission: ['user'], component: UserBoosterIncome },
  { path: '/topup/auto-trade-upgrade', name: 'User Top Up', permission: ['user'], component: AutoTradeUpgrade },
  { path: '/topup/auto-trade-upgrade-history', name: 'User Top Up', permission: ['user'], component: AutoTradeUpgradeHistory },
  { path: '/topup/auto-trade-user-topup', name: 'User Top Up', permission: ['user'], component: AutoTradeUserTopup },
  { path: '/topup/auto-trade-user-topup-history', name: 'User Top Up', permission: ['user'], component: AutoTradeUserTopupHistory },


  // earning section
  { path: '/earnings/earning-statistics', name: 'Earning Statistics', permission: ['user'], component: EarningStatistics },
  { path: '/earnings/direct-income', name: 'Direct Income', permission: ['user'], component: DirectIncome },
  { path: '/earnings/indirect-income', name: 'Indirect Income', permission: ['user'], component: IndirectIncome },
  { path: '/earnings/bonanza-reward-income', name: 'Bonanza/Reward income', permission: ['user'], component: BonanzaRewardIncome },
  { path: '/earnings/bonanza-achieve', name: 'Bonanza achieve', permission: ['user'], component: BonanzaAchieve },
  { path: '/earnings/bonanza-prize', name: 'Bonanza prize', permission: ['user'], component: BonanzaPrize },
  { path: '/earnings/bonanza-reward-income', name: 'Bonanza/Reward income', permission: ['user'], component: BonanzaRewardIncome },
  { path: '/earnings/auto-pool-income', name: 'Auto Pool income', permission: ['user'], component: AutoPoolIncome },
  { path: '/earnings/income-level-update', name: 'Income Level Update', permission: ['user'], component: IncomeLevelUpdate },
  { path: '/earnings/direct-withdraw-income', name: 'Direct Withdraw Income', permission: ['user'], component: DirectWithdrawIncome },
  { path: '/earnings/booster-income', name: 'Booster income', permission: ['user'], component: BoosterIncome },
  { path: '/earnings/gift-income', name: 'Gift income', permission: ['user'], component: GiftIncome },
  { path: '/earnings/royalty-income', name: 'Royalty Income', permission: ['user'], component: RoyaltyIncome },
  { path: '/earnings/booster-upgrade-income', name: 'Booster Upgrade Income', permission: ['user'], component:BoosterUpgradeIncome  },
  { path: '/earnings/auto-trade-income', name: 'Auto Trade Income', permission: ['user'], component: AutoTradeIncome  },
  { path: '/earnings/auto-trade-referral', name: 'Auto Trade Income', permission: ['user'], component: AutoTradeReferral  },
  // { path: '/startautopoolnow12', name: 'autopool start', permission: ['user'], component: AutopoolStart },

  // withdraw section
  { path: '/withdraw/withdraw-fund', name: 'withdraw funds', permission: ['user'], component: WithdrawFund },
  { path: '/withdraw/withdraw-history', name: 'withdraw history', permission: ['user'], component: WithdrawHistory },
  { path: '/withdraw/auto-trade-withdraw', name: 'withdraw history', permission: ['user'], component: AutoTradeWithdraw },
  { path: '/withdraw/auto-trade-withdraw-history', name: 'withdraw history', permission: ['user'], component: AutoTradeWithdrawHistory },

  // Fund Transfer
  { path: '/fund/top-up', name: 'User Top Up', permission: ['user'], component: UserTopUp },
  { path: '/fund/top-up-history', name: 'User Top Up', permission: ['user'], component: UserTopUpHistory },
  { path: '/fund/fund-transfer', name: 'Fund Transfer', permission: ['user'], component: FundTransfer },
  { path: '/fund/fund-transfer-history', name: 'Fund Transfer History', permission: ['user'], component: FundTransferHistory },




  // Settings =>Support
  { path: '/support/updates', name: 'updates', permission: ['user'], component: updates, exact: true },
  { path: '/support/support-ticket', name: 'support ticket', permission: ['user'], component: supportTicket, exact: true },
  { path: '/support/ticket-history', name: 'ticket history', permission: ['user'], component: TicketHistory, exact: true },
  { path: '/support/contact-us', name: 'Contact Us', permission: ['user'], component: ContactUs, exact: true },
  { path: '/support/contact-us-history', name: 'ContactUs History', permission: ['user'], component: ContactUsHistory, exact: true },


  /*******************************************admin routes *********************************************/
  { path: '/', exact: true, name: 'Dashboard', permission: ['admin'], component: AdminDashboard },

  // member section
  { path: '/member/team-statistics', exact: true, name: 'Team Statistics', permission: ['admin'], component: AdminTeamStatistics },
  { path: '/member/all-member', exact: true, name: 'All Member', permission: ['admin'], component: AllMember },
  { path: '/member/active-member', exact: true, name: 'Active Member', permission: ['admin'], component: ActiveMember },
  { path: '/member/blocked-member', exact: true, name: 'Blocked Member', permission: ['admin'], component: BlockedMember },

  // deposit section
  { path: '/deposit/all-deposit', exact: true, name: 'All Deposit', permission: ['admin'], component: AllDeposit },
  { path: '/deposit/successful-deposit', exact: true, name: 'Successful Deposit', permission: ['admin'], component: SuccessfulDeposit },
  { path: '/deposit/rejected-deposit', exact: true, name: 'Rejected Deposit', permission: ['admin'], component: RejectedDeposit },

  // withdraw section
  { path: '/Withdraw/all-auto-trade-withdraw', exact: true, name: 'All Withdraw', permission: ['admin'], component: AllAutoTradeWithdraw },
  { path: '/Withdraw/all-withdraw', exact: true, name: 'All Withdraw', permission: ['admin'], component: AllWithdraw },
  { path: '/Withdraw/successful-withdraw', exact: true, name: 'Successful Withdraw', permission: ['admin'], component: SuccessfulWithdraw },
  { path: '/Withdraw/rejected-withdraw', exact: true, name: 'Rejected Withdraw', permission: ['admin'], component: RejectedWithdraw },
  
  // Auto trade
  { path: '/trade/auto-trade-users', exact: true, name: 'Auto Trade Users', permission: ['admin'], component: AdminAutoTradeUsers },
  { path: '/trade/auto-trade-upgrade-history', exact: true, name: 'Auto Trade Users', permission: ['admin'], component: AdminAutoTradeUpgradeHistory },
  { path: '/trade/auto-trade-income-history', exact: true, name: 'Auto Trade Users', permission: ['admin'], component: AdminAutoTradeIncomeHistory },
  

  // Fund Transfer
  { path: '/transfer/fund-transfer', exact: true, name: 'Fund Transfer', permission: ['admin'], component: AdminFundTransfer },
  { path: '/transfer/fund-history', exact: true, name: 'Fund History', permission: ['admin'], component: AdminFundTransferHistory },
  { path: '/transfer/all-fund-history', exact: true, name: 'All Fund History', permission: ['admin'], component: AdminALLFundTransferHistory },
  { path: '/transfer/bonanza-transfer', exact: true, name: 'Bonanza Transfer', permission: ['admin'], component: AdminRewardTransfer },
  { path: '/transfer/bonanza-transfer-history', exact: true, name: 'Bonanza Transfer History', permission: ['admin'], component: AdminRewardTransferHistory },
  { path: '/transfer/royalty-income', exact: true, name: 'Royalty Income', permission: ['admin'], component: AdminRoyaltyIncome },
  { path: '/transfer/royalty-income-history', exact: true, name: 'Royalty Income History', permission: ['admin'], component: AdminRoyaltyIncomeHistory },
  { path: '/transfer/gift-income-transfer', exact: true, name: 'Gift Income Transfer', permission: ['admin'], component: AdminGiftIncomeTransfer },
  { path: '/transfer/gift-income-transfer-history', exact: true, name: 'Gift Income Transfer History', permission: ['admin'], component: AdminGiftIncomeTransferHistory },
  { path: '/transfer/user-topup-history', exact: true, name: 'User Topup History', permission: ['admin'], component: AdminUserTopupHistory },

  // earings
  { path: '/earnings/direct-income', name: 'Direct Income', permission: ['admin'], component: AdminDirectIncome },
  { path: '/earnings/indirect-income', name: 'Indirect Income', permission: ['admin'], component: AdminIndirectIncome },
  { path: '/earnings/auto-pool-income', name: 'Auto Pool income', permission: ['admin'], component: AdminAutoPoolIncome },
  { path: '/earnings/bonanza-reward-income', name: 'Bonanza/Reward income', permission: ['admin'], component: AdminBonanzaRewardIncome },
  { path: '/earnings/bonanza-achievers', name: 'Bonanza Achiever', permission: ['admin'], component: AdminBonanzaAchiever },
  { path: '/earnings/list-of-achievers', name: 'Bonanza Prize List', permission: ['admin'], component: AdminBonanzaPrizeList },
  { path: '/earnings/income-level-update', name: 'Income Level Update', permission: ['admin'], component: AdminIncomeLevelUpdate },
  { path: '/earnings/direct-withdraw-income', name: 'Direct Withdraw Income', permission: ['admin'], component: AdminDirectWithdrawIncome },
  { path: '/earnings/booster-income', name: 'Booster income', permission: ['admin'], component: AdminBoosterIncome },
  { path: '/earnings/booster-upgrade-income', name: 'Booster Upgrade income', permission: ['admin'], component: AdminBoosterUpgradeIncome },
  { path: '/earnings/booster-controller', name: 'Booster Controller', permission: ['admin'], component: AdminBoosterController },
  { path: '/earnings/gift-income', name: 'Gift income', permission: ['admin'], component: AdminGiftIncome },
  { path: '/earnings/royalty-income', name: 'Royalty Income', permission: ['admin'], component: AdminRoyaltyIncome },

  // { path: '/change-email', name: 'Change Email', permission: ['admin'], component: RoyaltyIncome },

  // support section
  { path: '/create-news', name: 'Create News', permission: ['admin'], component: AdminCreateNews },
  { path: '/contact-us', name: 'Contact Us', permission: ['admin'], component: AdminCreateUs },
  { path: '/ticket-data', name: 'Ticket Data', permission: ['admin'], component: AdminTicketData },

  // setting section
  { path: '/popup-image', name: 'Popup Image', permission: ['admin'], component: AdminPopUpImage },
  { path: '/change-password', name: 'Change Password', permission: ['admin'], component: AdminChangePassword },
  { path: '/auto-pool-controller', name: 'Auto Pool Controller', permission: ['admin'], component: AdminAutoController },
  { path: '/video-controller', name: 'Video Controller', permission: ['admin'], component: AdminVideoController },
  { path: '/pdf-controller', name: 'PDF Controller', permission: ['admin'], component: AdminPDFController },

] 