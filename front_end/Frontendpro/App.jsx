import React, { useState, useRef } from 'react';
import { View, Button, Text, Alert, Linking,StyleSheet } from 'react-native';
// import Collections from './Pages/Collections';
// import ShowmyCounts from './Pages/ShowmyCounts';
// import MySettings from './Pages/MySettings';
import Video from 'react-native-video';
import { WebView } from 'react-native-webview';




const App = ({Title1, Title2, Title3, MaxCount}) => {
  const [showWebView, setShowWebView] = useState(false);
  const [videourl, setvideourl] = useState('');
  const [currPage, setCurrPage] = useState('Home');
  // const [AData, setAData] = useState(0);
  // const [BData, setBData] = useState(0);
  // const [CData, setCData] = useState(0);
  // const [TotalData, setTotal] = useState(0);
  // const [datastack, setstack] = useState<string[]>([]);


  const toggleWebView = () => {
    setShowWebView(!showWebView);
  };
const StopCamera = async () => {
  try {
    const response = await fetch('http://youripaddress:3000/stop_camera', {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Request successfully sent to the endpoint
    console.log("here");
  } catch (error) {
    console.error('Error triggering GET request:', error);
  }
};

  const renderPage = () => {
    switch (currPage) {
      case 'Home':
        return (
          <View style={styles.container}>
            <Text>This is the Home Page!</Text>
            <Button title="Check my database data (backend)" onPress={() => setCurrPage('Collections')} />
            <Text></Text>
            <Text>{videourl}</Text>
           
          <Text></Text>
          <Button title='Link to camera' onPress={()=>{Linking.openURL("http://youripaddress:3000/video_feed")}}></Button>
          <Text></Text>
          <Button title='On & off Camera' onPress={toggleWebView}></Button>
          
    {showWebView && (
        <WebView
          source={{ uri: 'http://youripaddress:3000/video_feed' }} // Replace with your desired URL
          style={{ flex: 1 }}
        />
      )}
          </View>
        );
            
      default:
        return null;
    }
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    webview: {
      flex: 1,
      backgroundColor: 'transparent', // Set background color to transparent
    },
  });
  
  return (
    <View style={{ flex: 1 }}>
    {renderPage()}
  </View>
  );
};

export default App;
