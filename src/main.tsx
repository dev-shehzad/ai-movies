import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next"; // Add this line
import i18n from "./i18n"; // Import your i18n setup
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </I18nextProvider>
  </BrowserRouter>
);
