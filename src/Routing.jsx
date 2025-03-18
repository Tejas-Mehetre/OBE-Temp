import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollTop from '../src/shared/ScrollTop';
import SetupAuthGuard from "./AuthGuard/Setup.AuthGuard";
import { DashboardProvider } from "./context/DashboardContext";
import PageTitleUpdater from "./utils/PageTitleUpdater";

import ForgotPassword from "./layouts/signin-up/ForgotPassword";
import SignInUp from './layouts/signin-up/SignIn-Up';
import ConfirmSignup from "./layouts/signin-up/ConfirmSignup";
import ErrorPage from "./shared/errors/ErrorPage";
import DashboardAuthGuard from "./AuthGuard/Dashboard.AuthGuard";
import SignInUpAuthGuard from './AuthGuard/SignInUp.AuthGuard';
import SuperAdminAuthGuard from './AuthGuard/SuperAdmin.AuthGuard';
import ManageAccess from './modules/Team/ManageAccess';
import HubSpotTicketForm from './layouts/ticket/Support-Ticket';
import WaitingOnSuperAdmin from './modules/NewUserSignIn/WaitingOnSuperAdmin';
import JoinAgent from "./layouts/joinAgent/Index"
import SetPassword from './layouts/joinAgent/SetPassword';
import JoiningPayment from './layouts/joinAgent/JoiningPayment';
import { TermsAndCondition } from './layouts/joinAgent/Terms&Condition';
import PrivacyPolicy from './layouts/joinAgent/PrivacyPolicy';
import SignOut from './layouts/sign-out/SignOut';
import JoinAgentAuthGaurd from './AuthGuard/JoinAgent.AuthGaurd';

import Index from './modules/adminViewLandingPage/index';
import LandingPage from './modules/adminViewLandingPage/components/LandingPage';
import HowItWork from './modules/adminViewLandingPage/components/HowItWork';
import SuccessGuarntee from './modules/adminViewLandingPage/components/SuccessGuarntee';
import TrainingAndSupport from './modules/adminViewLandingPage/components/TrainingAndSupport';
import WebsiteAndMarketing from './modules/adminViewLandingPage/components/WebsiteAndMarketing';
import SubmitRefferals from './modules/adminViewLandingPage/components/SubmitRefferals';
import AgentDemoWebsite from './modules/adminViewLandingPage/components/AgentDemoWebsite';
import Subcription from './modules/adminViewLandingPage/components/Subcription';

const Dashboard = React.lazy(() => import("./layouts/Dashboard/Dashboard"));
const SetupGetPaymentInfo = React.lazy(() => import("./modules/NewUserSignIn/SetupGetPaymentInfo"));
const PolicyandProceduresManual = React.lazy(() => import("./modules/NewUserSignIn/PolicyandProceduresManual"));
const IndependentContractor = React.lazy(() => import("./modules/NewUserSignIn/IndependentContractor"));
const AddAgentLicense = React.lazy(() => import("./modules/NewUserSignIn/AddLicense"));
const TransferLicense = React.lazy(() => import("./modules/NewUserSignIn/TransferLicense"));
const UserAgentInfo = React.lazy(() => import("./modules/NewUserSignIn/UserAgentInfo"));
const SelectUserType = React.lazy(() => import("./modules/NewUserSignIn/SelectUserType"));
const UserPartnerInfo = React.lazy(() => import("./modules/NewUserSignIn/UserPartnerInfo"));
const ViewPage = React.lazy(() => import("./shared/view/ViewPage"));
const SignUpAdmin = React.lazy(() => import('./layouts/signin-up/Sign-Up-Admin'));

// Lazy-loaded components
const ProductsSamcart = React.lazy(() => import("./modules/Team/products-samcart"));
const CustomersSamcart = React.lazy(() => import("./modules/Team/customers-samcart"));
const ProductsCustomerSamcart = React.lazy(() => import("./modules/Team/Products-customer-samcart"));
const CreateTeam = React.lazy(() => import("./modules/Team/CreateTeam"));
const ManageTeams = React.lazy(() => import("./modules/Team/ManageTeams"));
const ViewTeam = React.lazy(() => import("./modules/Team/ViewTeam"));
const Access9 = React.lazy(() => import("./modules/AccountSetting/Access9/Access9"));
const BillingPage = React.lazy(() => import("./modules/AccountSetting/billingPage/BillingPage"));
const Profile = React.lazy(() => import("./modules/AccountSetting/Profile"));
const ContinuingEducation = React.lazy(() => import("./modules/ContinuingEducation/ContinuingEducation"));
const AgentSelection = React.lazy(() => import("./modules/Create Referral/AgentSelection"));
const BuyerReferral = React.lazy(() => import("./modules/Create Referral/BuyerReferral"));
const ClientInfo = React.lazy(() => import("./modules/Create Referral/ClientInfo"));
const SelectReferralType = React.lazy(() => import("./modules/Create Referral/SelectReferralType"));
const SellerReferral = React.lazy(() => import("./modules/Create Referral/SellerReferral"));
const HomePage = React.lazy(() => import("./modules/home/HomePage"));
const ArchiveLicense = React.lazy(() => import("./modules/Licence Management/ArchiveLicense"));
const EditPartnerLicense = React.lazy(() => import("./modules/Licence Management/EditPartnerLicense"));
const EditPrimaryLicense = React.lazy(() => import("./modules/Licence Management/EditPrimaryLicense"));
const PartnerInfo = React.lazy(() => import("./modules/Licence Management/PartnerInfo"));
const PartnerLicense = React.lazy(() => import("./modules/Licence Management/PartnerLicenses"));
const PrimaryLicence = React.lazy(() => import("./modules/Licence Management/PrimaryLicences"));
const ManageReferrals = React.lazy(() => import("./modules/ManageReferral/ManageReferrals"));
const DigitalBusinessCard = React.lazy(() => import("./modules/Marketing/DigitalBusinessCard"));
const RealtyDashboard = React.lazy(() => import("./modules/RealtyDashboard/RealtyDashboard"));
const EditUserManagement = React.lazy(() => import("./modules/UserManagement/EditUserManagement"));
const UserManagement = React.lazy(() => import("./modules/UserManagement/UserManagement"));
const WebsiteLeads = React.lazy(() => import("./modules/WebsiteLeads/WebsiteLeads"));
const AgentReferralInfo = React.lazy(() => import("./modules/Create Referral/AgentReferralInfo"));
const ViewLandingPage = React.lazy(() => import("./modules/Marketing/ViewLandingPage"));
const ViewReferralMain = React.lazy(() => import("./modules/ManageReferral/View-Referrals/ViewReferralMain"));
const AgentReferralAgreement = React.lazy(() => import("./modules/Create Referral/AgentReferralAgreement"));
const ReferralCreated = React.lazy(() => import("./modules/Create Referral/ReferralCreated"));
const AgentWebsite = React.lazy(() => import("./modules/Marketing/AgentWebsite/AgentWebsite"));
const LicensePayment = React.lazy(() => import("./modules/Licence Management/LicensePayment"));
const ArchiveManageReferrals = React.lazy(() => import("./modules/ManageReferral/ArchiveManageReferrals"));
const Bootcamp = React.lazy(() => import("./modules/Training/Bootcamp"));
const Aggrement = React.lazy(() => import("./modules/ManageReferral/Aggrement"));
const UserAdminInfo = React.lazy(() => import("./modules/NewUserSignIn/UserAdminInfo"));

function Routing() {
    return (
        <DashboardProvider>
            <BrowserRouter>
                <ScrollTop />
                <PageTitleUpdater />
                <Suspense>
                    <Routes>
                        <Route path="/forgotpassword" element={<ForgotPassword />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </DashboardProvider>
    );
}

export default Routing;