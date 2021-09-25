import React, { useRef, useState } from "react";
import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonInput,
  IonLabel,
  IonIcon,
  IonButton,
  IonCard,
  IonCardContent,
} from "@ionic/react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";

import Bus from "./images/bus.png";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {
  const [final, setFinal] = useState<number>();

  const passengerIn = useRef<HTMLIonInputElement>(null);
  const passengerOut = useRef<HTMLIonInputElement>(null);
  const travellers: number[][] = [];

  const addTravellers = () => {
    const passIn = +passengerIn.current!.value!;
    const passOut = +passengerOut.current!.value!;
    travellers.push([passIn, passOut]);
    const number = (busStops: any[]) =>
      busStops.reduce((rem, [on, off]) => rem + on - off, 0);
    console.log(number(travellers));
    setFinal(number(travellers));
  };

  const resetInputs = () => {
    passengerIn.current!.value! = '';
    passengerOut.current!.value! = '';
    travellers.length = 0;
    setFinal(0);
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bus Traveller Tracking</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <img src={Bus} className="BusLogo" alt="Bus" />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Passenger In</IonLabel>
                <IonInput ref={passengerIn}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Passenger Out</IonLabel>
                <IonInput ref={passengerOut}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol className="ion-text-left">
              <IonButton onClick={addTravellers}>
                <IonIcon slot="start" icon={calculatorOutline} />
                Submit
              </IonButton>
            </IonCol>
            <IonCol className="ion-text-left">
              <IonButton onClick={resetInputs}>
                <IonIcon slot="start" icon={refreshOutline} />
                Reset
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Total Passengers Left</IonLabel>
                <br />
                <IonCard>
                  <IonCardContent>
                    <h2>{final}</h2>
                  </IonCardContent>
                </IonCard>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default App;
