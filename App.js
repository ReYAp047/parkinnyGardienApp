import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';


import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from './Core/Config'



export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [periode, setPeriode] = useState(null);
  const [date, setDate] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const [time, setTime] = useState(null);



  useEffect(() => {
 
    setDate(new Date().getDate()); 
    setMonth(new Date().getMonth() + 1); 
    setYear(new Date().getFullYear()); 
    setTime(new Date().getHours()); 
   
    console.log(time)
   if (6 <=time && time <= 8)
   {
     setPeriode("One")
   }
   else if (8 <= time && time < 10)
   {setPeriode("Tow")}
   else if (10 <= time && time < 12)
   {setPeriode("Three")}
   else if (12 <= time && time < 14)
   {setPeriode("Four")}
   else if (14 <= time && time < 16)
   {setPeriode("Five")}
   else if (16 <= time && time < 18)
   {setPeriode("Six")}
   else if (18 <= time && time < 20)
   {setPeriode("Seven")}
   else if (20 <= time && time < 22)
   {setPeriode("Eight")}
   else
   {setPeriode("Nine")}

    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    

    setDate(new Date().getDate()); 
    setMonth(new Date().getMonth() + 1); 
    setYear(new Date().getFullYear()); 
    setTime(new Date().getHours()); 
   
    console.log(time)
   if (6 <=time && time <= 8)
   {
     setPeriode("One")
   }
   else if (8 <= time && time < 10)
   {setPeriode("Tow")}
   else if (10 <= time && time < 12)
   {setPeriode("Three")}
   else if (12 <= time && time < 14)
   {setPeriode("Four")}
   else if (14 <= time && time < 16)
   {setPeriode("Five")}
   else if (16 <= time && time < 18)
   {setPeriode("Six")}
   else if (18 <= time && time < 20)
   {setPeriode("Seven")}
   else if (20 <= time && time < 22)
   {setPeriode("Eight")}
   else
   {setPeriode("Nine")}


    alert(`date ${date} month ${month} year ${year} time ${time} periode ${periode} `);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

     

  const Read = () =>{
   

    const q = query(collection(db, "Reservation"), where("ClientID", "==", data), where(periode, '==', True),where('Year', '==', year),where('Month', '==', month),where('Date', '==', date));

    const querySnapshot = getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
