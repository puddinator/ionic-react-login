import { IonButton, IonInput, IonItem, IonLabel, IonPage } from "@ionic/react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage style={{ background: "white", display: "flex" }}>
      <div className="header">
        <h3 className="header-title ion-margin-start">
          Welcome <br />
          Back!
        </h3>
      </div>
      <div className="body">
        <form className="ion-padding">
          <h4 className="form-title">Sign In To Athena</h4>

          <div className="form-content">
            <IonItem color="#f8f8f8">
              <IonLabel position="floating">Username</IonLabel>
              <IonInput />
            </IonItem>
            <IonItem color="#f8f8f8">
              <IonLabel position="floating">Password</IonLabel>
              <IonInput type="password" />
            </IonItem>

            <p>
              <a href="#">Forgot Password?</a>
            </p>
          </div>

          <IonButton
            className="ion-margin-top form-submit"
            size="large"
            type="submit"
            expand="block"
          >
            Sign In
          </IonButton>
        </form>

        <p className="footer">
          New User? <a href="#">Contact Us</a>
        </p>
      </div>
    </IonPage>
  );
};

export default Home;
