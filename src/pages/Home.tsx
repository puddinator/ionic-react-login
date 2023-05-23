import {
  IonButton,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
} from "@ionic/react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage className="page-container">
      <IonImg className="leaf2" src="assets/images/leaf-2.png" alt="Leaf" />
      <IonImg className="leaf6" src="assets/images/leaf-6.png" alt="Leaf" />

      <div className="header">
        <h3 className="header-title">Sign In</h3>
        <h4 className="header-subtitle">to Athena</h4>
      </div>

      <div className="body">
        <form>
          <div className="form-content">
            <IonItem color="#f8f8f8">
              <IonLabel color="#f8f8f8" position="stacked">
                Username
              </IonLabel>
              <IonInput />
            </IonItem>
            <IonItem color="#f8f8f8">
              <IonLabel color="#f8f8f8" position="stacked">
                Password
              </IonLabel>
              <IonInput type="password" />
            </IonItem>
          </div>

          <IonButton
            type="submit"
            color="secondary"
            shape="round"
            className="form-submit"
          >
            Sign In
          </IonButton>
          <a href="#">Forgot Password?</a>
        </form>
      </div>

      <div className="footer">
        <IonImg
          className="logo"
          src="assets/images/logo.png"
          alt="Beco Ventures"
        />
        <p>
          New User? <a href="#">Contact Us</a>
        </p>
      </div>
    </IonPage>
  );
};

export default Home;
