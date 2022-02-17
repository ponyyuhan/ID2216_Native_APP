import React,{useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
} from 'react-native';
import WebView from 'react-native-webview';
 
const App = () => {
    const [url,setUrl] = useState('http://www.twitter.com');
    const [webView,setWebview] = useState(null);
    const [urlInput,setUrlInput] = useState(url);
 
 
    const webViewOnLoad = (syntheticEvent) => {
        const {nativeEvent} = syntheticEvent;
        const curl = nativeEvent.url;
     
        const jmurl = decodeURIComponent(curl);
        setUrlInput(jmurl);
        console.log("web finished："+jmurl)
    };
 
    const onMessage = (event) => {
        const rep = event.nativeEvent.data;
    
        let minLog = rep;
        if (rep.length > 300) {
            minLog = rep.substring(0, 290);  
        }
        console.log(minLog);
    };
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{height:40,flexDirection:'row',justifyContent:'space-between'}}>
                
            </View>
            <WebView source={{uri: url}}
                     ref={(webView) => (setWebview(webView))}
                     sharedCookiesEnabled={true}
                     startInLoadingState={true}
                     onLoad={webViewOnLoad}
                     onMessage={onMessage}
                     onError={syntheticEvent => {
                         const {nativeEvent} = syntheticEvent;
                         console.log('network failed');
                         console.warn('WebView error: ', nativeEvent);
                     }}
            />
            <View style={{flexDirection:'row',justifyContent:'space-between',height:40,backgroundColor:'white'}}>
                <Button title={"login your twitter"} onPress={()=>{
                    setUrl('http://www.twitter.com?t='+new Date().getTime());
                }}/>
                <Button title={"back"} onPress={()=>{
                    webView.goBack();
                }}/>
 
                <Button title={"forward"} onPress={()=>{
                    webView.goForward();
                }}/>
 
                <Button title={"reload"} onPress={()=>{
                    webView.reload();
                }}/>
            </View>
 
        </SafeAreaView>);
};
 
const styles = StyleSheet.create({
});
 
export default App;