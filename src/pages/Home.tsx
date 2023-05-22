import { IonButton, IonInput, IonItem, IonLabel, IonPage } from "@ionic/react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage style={{ background: "white", display: "flex" }}>
      <div className="header">
        <h3 className="header-title ion-margin-start">
          Sign In <br />
          to Athena
        </h3>
      </div>
      <div className="body">
        <form className="ion-padding">
          <div className="form-content">
            <IonItem color="#f8f8f8">
              <IonLabel>Username</IonLabel>
              <IonInput />
            </IonItem>
            <IonItem color="#f8f8f8">
              <IonLabel>Password</IonLabel>
              <IonInput type="password" />
            </IonItem>
          </div>

          <IonButton
            className="ion-margin-top form-submit"
            size="large"
            type="submit"
            expand="block"
          >
            Sign In
          </IonButton>

          <p>
            <a href="#">Forgot Password?</a>
          </p>
        </form>
      </div>
      <div className="footer">
        New User? <a href="#">Contact Us</a>
      </div>
    </IonPage>
  );
};

export default Home;
