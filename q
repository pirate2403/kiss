const RegisterRoutes = React.lazy(async () => await import('./register'))
const ReferRoutes = React.lazy(async () => await import('./refer'))
const FavoritesManRoutes = React.lazy(
  async () => await import('./man-nav/favorites')
)
const MailingManRoutes = React.lazy(
  async () => await import('./man-nav/mailing')
)
const NewsManRoutes = React.lazy(async () => await import('./man-nav/news'))
const SearchManRoutes = React.lazy(async () => await import('./man-nav/search'))
const MailingWomanRoutes = React.lazy(
  async () => await import('./woman-nav/mailing')
)
const NewsWomanRoutes = React.lazy(async () => await import('./woman-nav/news'))
const RequestsWomanRoutes = React.lazy(
  async () => await import('./woman-nav/requests')
)


// Home
import React from 'react'

export const HomePage = React.lazy(async () => await import('./HomePage'))

// Terms
export const PolicyPage = React.lazy(
  async () => await import('./Terms/PolicyPage')
)
export const AgreementPage = React.lazy(
  async () => await import('./Terms/AgreementPage')
)
export const CookiesPolicyPage = React.lazy(
  async () => await import('./Terms/CookiesPolicyPage')
)

// About
export const AboutPage = React.lazy(async () => await import('./AboutPage'))

// Authentication
export const AuthPage = React.lazy(async () => await import('./AuthPage'))

// Security settings
export const SecuritySettingsPage = React.lazy(
  async () => await import('./SecuritySettingsPage')
)

// Restore password
export const RestorePasswordPage = React.lazy(
  async () => await import('./RestorePasswordPage')
)

// Register
export const RegisterPage = React.lazy(async () => await import('./Register'))
export const RegisterStartPage = React.lazy(
  async () => await import('./Register/RegisterStartPage')
)
export const RegisterRejectPage = React.lazy(
  async () => await import('./Register/RegisterRejectPage')
)
export const RegisterYoungRejectPage = React.lazy(
  async () => await import('./Register/RegisterYoungRejectPage')
)

// - Man register
export const RegisterManPhotosPage = React.lazy(
  async () => await import('./Register/RegisterMan/RegisterManPhotosPage')
)
export const RegisterManStep1Page = React.lazy(
  async () => await import('./Register/RegisterMan/RegisterManStep1Page')
)
export const RegisterManSeedPage = React.lazy(
  async () => await import('./Register/RegisterMan/RegisterManSeedPage')
)
export const RegisterManStep2Page = React.lazy(
  async () => await import('./Register/RegisterMan/RegisterManStep2Page')
)
export const RegisterManStep3Page = React.lazy(
  async () => await import('./Register/RegisterMan/RegisterManStep3Page')
)
export const RegisterManHelloPage = React.lazy(
  async () => await import('./Register/RegisterMan/RegisterManHelloPage')
)
export const RegisterManDatingFormatsPage = React.lazy(
  async () =>
    await import('./Register/RegisterMan/RegisterManDatingFormatsPage')
)

// - Woman register
export const RegisterWomanStep1Page = React.lazy(
  async () => await import('./Register/RegisterWoman/RegisterWomanStep1Page')
)
export const RegisterWomanSeedPage = React.lazy(
  async () => await import('./Register/RegisterWoman/RegisterWomanSeedPage')
)
export const RegisterWomanStep2Page = React.lazy(
  async () => await import('./Register/RegisterWoman/RegisterWomanStep2Page')
)
export const RegisterWomanStep3Page = React.lazy(
  async () => await import('./Register/RegisterWoman/RegisterWomanStep3Page')
)
export const RegisterWomanStep4Page = React.lazy(
  async () => await import('./Register/RegisterWoman/RegisterWomanStep4Page')
)
export const RegisterWomanStep5Page = React.lazy(
  async () => await import('./Register/RegisterWoman/RegisterWomanStep5Page')
)
export const RegisterWomanMediaPage = React.lazy(
  async () => await import('./Register/RegisterWoman/RegisterWomanMediaPage')
)
export const RegisterWomanVerificationPage = React.lazy(
  async () =>
    await import('./Register/RegisterWoman/RegisterWomanVerificationPage')
)
export const RegisterWomanContactsPage = React.lazy(
  async () => await import('./Register/RegisterWoman/RegisterWomanContactsPage')
)
export const RegisterWomanVerificationSentPage = React.lazy(
  async () =>
    await import('./Register/RegisterWoman/RegisterWomanVerificationSentPage')
)
export const RegisterWomanContactsVerificationPage = React.lazy(
  async () =>
    await import(
      './Register/RegisterWoman/RegisterWomanContactsVerificationPage'
    )
)
export const RegisterWomanTestAcceptPage = React.lazy(
  async () =>
    await import('./Register/RegisterWoman/RegisterWomanTestAcceptPage')
)
export const RegisterWomanHelloPage = React.lazy(
  async () => await import('./Register/RegisterWoman/RegisterWomanHelloPage')
)
export const RegisterWomanDatingFormatsPage = React.lazy(
  async () =>
    await import('./Register/RegisterWoman/RegisterWomanDatingFormatsPage')
)

// Search
export const SearchPage = React.lazy(
  async () => await import('./Search/SearchPage')
)
export const CatalogBuyPage = React.lazy(
  async () => await import('./Search/CatalogBuyPage')
)
export const CatalogListPage = React.lazy(
  async () => await import('./Search/CatalogListPage')
)
// TODO: перенести
export const ProfileSearchPage = React.lazy(
  async () => await import('./Search/ProfileSearchPage')
)

// News
export const NewsPage = React.lazy(async () => await import('./News/NewsPage'))
export const NewsPostPage = React.lazy(
  async () => await import('./News/NewsPostPage')
)

// Mailing
export const MailingManAddPage = React.lazy(
  async () => await import('./Mailing/MailingManAddPage')
)
export const MailingManPage = React.lazy(
  async () => await import('./Mailing/MailingManPage')
)
export const MailingMyPage = React.lazy(
  async () => await import('./Mailing/MailingMyPage')
)
export const MailingWomanAddPage = React.lazy(
  async () => await import('./Mailing/MailingWomanAddPage')
)
export const MailingWomanPage = React.lazy(
  async () => await import('./Mailing/MailingWomanPage')
)

// Man favorites
export const FavoritesManPage = React.lazy(
  async () => await import('./ManFavorites/FavoritesManPage')
)
export const FavoritesContactsManPage = React.lazy(
  async () => await import('./ManFavorites/FavoritesContactsManPage')
)

// Reactions
export const ManReactionsPage = React.lazy(
  async () => await import('./Reactions/ManReactionsPage')
)
export const WomanReactionsPage = React.lazy(
  async () => await import('./Reactions/WomanReactionsPage')
)

// Woman requests
export const WomanRequestsPage = React.lazy(
  async () => await import('./WomanRequests/WomanRequestsPage')
)
export const WomanRequestsHistoryPage = React.lazy(
  async () => await import('./WomanRequests/WomanRequestsHistoryPage')
)
// TODO: перенести
export const FavoritesProfilePage = React.lazy(
  async () => await import('./WomanRequests/FavoritesProfilePage')
)

// Profile
export const ManProfilePage = React.lazy(
  async () => await import('./Profile/ManProfilePage')
)
export const ManProfileEditPage = React.lazy(
  async () => await import('./Profile/ManProfileEditPage')
)
export const ProfileWomanPage = React.lazy(
  async () => await import('./Profile/ProfileWomanPage')
)
export const ProfileEditWomanPage = React.lazy(
  async () => await import('./Profile/ProfileEditWomanPage')
)
export const WomanContactsPage = React.lazy(
  async () => await import('./Profile/WomanContactsPage')
)
export const ContactsInVerificationPage = React.lazy(
  async () => await import('./Profile/ContactsInVerificationPage')
)
export const LoginSettingsPage = React.lazy(
  async () => await import('./Profile/LoginSettingsPage')
)
export const UserBlockedPage = React.lazy(
  async () => await import('./Profile/UserBlockedPage')
)
export const UserLockedPage = React.lazy(
  async () => await import('./Profile/UserLockedPage')
)
export const AboutServicePage = React.lazy(
  async () => await import('./Profile/AboutServicePage')
)

// Payments
export const PaymentsPage = React.lazy(
  async () => await import('./PaymentsPage')
)

// Notifications
export const ManNotifications = React.lazy(
  async () => await import('./Notifications/ManNotifications')
)
export const WomanNotifications = React.lazy(
  async () => await import('./Notifications/WomanNotifications')
)

// Refer
export const ReferPage = React.lazy(
  async () => await import('./Refer/ReferPage')
)
export const ReferInfoPage = React.lazy(
  async () => await import('./Refer/ReferInfoPage')
)
export const ReferHistoryPage = React.lazy(
  async () => await import('./Refer/ReferHistoryPage')
)
export const ReferBalancePage = React.lazy(
  async () => await import('./Refer/ReferBalancePage')
)
export const ReferLevelPage = React.lazy(
  async () => await import('./Refer/ReferLevelPage')
)

// Errors
export const ErrorServerPage = React.lazy(
  async () => await import('./Errors/ErrorServerPage')
)
export const ErrorForbiddenPage = React.lazy(
  async () => await import('./Errors/ErrorForbiddenPage')
)
export const ErrorNotFoundPage = React.lazy(
  async () => await import('./Errors/ErrorNotFoundPage')
)
export const SuggestionPage = React.lazy(
  async () => await import('./SuggestionPage')
)

export const ClosedEventsPage = React.lazy(
  async () => await import('./ClosedEventsPage')
)

// UI
export const UIPage = React.lazy(async () => await import('./UIPage'))
