import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import home from "./pages/home/home";
import login from "./pages/login/login";
import signup from "./pages/signup/signup";
import events from "./pages/events/events";
import eventsdetail from "./pages/events/eventsdetail";
import IS from "./pages/InsightSheet/insightsheet";
import ISDetail from "./pages/InsightSheet/insightsheetdetail";
import product from "./pages/Product/product";
import buyproduct from "./pages/Product/buyproduct";
import pricelistupdatesummary from "./pages/PriceListUpdateSummary/pricelistupdatesummary";
import pricelistupdatesummaryofmonth from "./pages/PriceListUpdateSummary/pricelistupdatesummaryofmonth";
import IR from "./pages/InsighterReport/insighterreport";
import IRDetail from "./pages/InsighterReport/insighterreportdetail";
import VG from "./pages/VideoGallery/videogallery";
import VGDetail from "./pages/VideoGallery/videogallerydetail";
import trainingmodules from "./pages/TrainingModules/trainingmodules";
import matterportstandards from "./pages/MatterportStandards/matterportstandards";
import commonlyoverlookedlineitems from "./pages/CommonlyOverlookedLineItems/commonlyoverlookedlineitems";
import solidifai from "./pages/Solidifai/solidifai";
import zora from "./pages/Zora/zora";
import Receipt from "./components/Receipt";
import AdminLogin from "./admin/pages/login/login";
import dashboard from "./admin/pages/Dashboard/dashboard";
import insightsheet from "./admin/pages/InsightSheets/insightsheet";
import products from "./admin/pages/Products/products";
import CreateInsightSheet from "./admin/pages/InsightSheets/createInsightSheet";
import ProductsList from "./admin/pages/Products/productsList";
import CreateProduct from "./admin/pages/Products/createProduct";
import events_admin from "./admin/pages/Events/events";
import CreateEvent from "./admin/pages/Events/createEvent";
import ProtectedRoute from "./admin/components/ProtectedRoute";
import history from "../utils/history";

const App: React.FC = () => {

  return (
    <>
      <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/login" component={login} />
        <Route exact path="/signup" component={signup} />
        <Route exact path="/events" component={events} />
        <Route exact path="/eventsdetail" component={eventsdetail} />
        <Route exact path="/insightsheet" component={IS} />
        <Route exact path="/insightsheetdetail" component={ISDetail} />
        <Route exact path="/product" component={product} />
        <Route exact path="/buyproduct" component={buyproduct} />
        <Route exact path="/pricelistupdatesummary" component={pricelistupdatesummary} />
        <Route exact path="/pricelistupdatesummaryofmonth" component={pricelistupdatesummaryofmonth} />
        <Route exact path="/insighterreport" component={IR} />
        <Route exact path="/insighterreportdetail" component={IRDetail} />
        <Route exact path="/videogallery" component={VG} />
        <Route exact path="/videogallerydetail" component={VGDetail} />
        <Route exact path="/3d-training-modules" component={trainingmodules} />
        <Route exact path="/matterport-standards" component={matterportstandards} />
        <Route exact path="/commonly-overlooked-line-items" component={commonlyoverlookedlineitems} />
        <Route exact path="/solidifai" component={solidifai} />
        <Route exact path="/zora" component={zora} />
        <Route exact path="/receipt" component={Receipt} />
        <Route exact path={["/admin/login", "/admin"]} component={AdminLogin} />
        <ProtectedRoute path="/admin/dashboard" component={dashboard} />
        <ProtectedRoute path="/admin/insightsheet" component={insightsheet} />
        <ProtectedRoute path="/admin/createInsightSheet" component={CreateInsightSheet} />
        <ProtectedRoute path="/admin/products" component={products} />
        <ProtectedRoute path="/admin/productsList" component={ProductsList} />
        <ProtectedRoute path="/admin/createProduct" component={CreateProduct} />
        <ProtectedRoute path="/admin/events" component={events_admin} />
        <ProtectedRoute path="/admin/createEvent" component={CreateEvent} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
