import React, { Component, useState } from 'react';
import { Text, View, ScrollView, StyleSheet, Picker, Switch, Button,Modal, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import { onChange } from 'react-native-reanimated';
import * as Animatable from 'react-native-animatable';

class Reservation extends Component{
    constructor(props) {
        super(props);
        this.state = {
            guests: 1,
            smoking: false,
            date: new Date,
            mode:'date',
            show:false,
            showModal: false
        }
    }
  //   handleReservation = ( selectedDate) => {
  //     const currentDate = selectedDate || this.state.date;
  //     console.log(JSON.stringify(this.state));
  //     this.setState({
  //         guests: 1,
  //         smoking: false,
  //         date: currentDate,
  //         show:false
  //     });
  // };

  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    this.setState({
      date: currentDate,
      show:false
    });
  };

  
   showDatepicker = () => {
      this.setState({
          show:true,
          mode:"datetime"
      })
  };

  
   showTimepicker = () => {
      this.setState({
          show:true,
          mode:"time"
      })
  };

  toggleModal() {
    this.setState({showModal: !this.state.showModal});
}

handleReservation =() => {
  console.log(JSON.stringify(this.state));
    Alert.alert(
      'Your Reservation OK?',
      'Number of Guests: '+this.state.guests +' \nSmoking? '+this.state.smoking+' \nDate and Time: '+this.state.date,
      [
      {text: 'Cancel', onPress: () => {console.log('Cancel Pressed');this.resetForm();}, style: 'cancel'},
      {text: 'OK', onPress: () => {console.log('accept Pressed');this.resetForm();}},
      ],
      { cancelable: false }
  );
  
}

resetForm() {
    this.setState({
        guests: 1,
          smoking: false,
          date: new Date,
          mode:'date',
          show:false,
          showModal: false
    });
}

  render(){
      return (
        <Animatable.View animation="zoomIn" duration={2000} delay={1000}>
        <ScrollView>
        <View style={styles.formRow}>
                <Text style={styles.formLabel}>Number of Guests</Text>
                <Picker
                    style={styles.formItem}
                    selectedValue={this.state.guests}
                    onValueChange={(itemValue, itemIndex) => this.setState({guests: itemValue})}>
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="5" value="5" />
                    <Picker.Item label="6" value="6" />
                </Picker>
                </View>
                <View style={styles.formRow}>
                <Text style={styles.formLabel}>Smoking/Non-Smoking?</Text>
                <Switch
                    style={styles.formItem}
                    value={this.state.smoking}
                    trackColor={{ false: "#767577", true: "#512DA8" }}
                    thumbColor="#fff"
                    onValueChange={(value) => this.setState({smoking: value})}>
                </Switch>
                </View>
                <View style={styles.formRow}>
                <Text style={styles.formLabel}>Date and Time</Text>
                <View>
                  <View>
                    <Button color="#512DA8" onPress={this.showDatepicker} title={this.state.date.toDateString()} />
                  </View>
                  <View>
                    <Button color="#512DA8" onPress={this.showTimepicker} title={this.state.date.toTimeString()} />
                  </View>
                  {this.state.show && (
                    <DateTimePicker
                      style={{flex: 2, marginRight: 20, dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }}}
                  value={this.state.date}
                  mode={this.state.mode}
                  is24Hour={true}
                  minimumDate={new Date(2017, 1, 1)}
                  display="default"
                      onChange={this.onChange}
                  />
                  )
                  }
                </View>
              </View>
              <View style={styles.formRow}>
                <Button
                    onPress={this.handleReservation}
                    title="Reserve"
                    color="#512DA8"
                    accessibilityLabel="Learn more about this purple button"
                    />
                </View>
                {/* <Modal animationType = {"slide"} transparent = {false}
                    visible = {this.state.showModal}
                    onDismiss = {() => this.toggleModal() }
                    onRequestClose = {() => this.toggleModal() }>
                    <View style = {styles.modal}>
                        <Text style = {styles.modalTitle}>Your Reservation</Text>
                        <Text style = {styles.modalText}>Number of Guests: {this.state.guests}</Text>
                        <Text style = {styles.modalText}>Smoking?: {this.state.smoking ? 'Yes' : 'No'}</Text>
                        <Text style = {styles.modalText}>Date and Time: {this.state.date.toString()}</Text>
                        <Button 
                            onPress = {() =>{this.toggleModal(); this.resetForm();}}
                            color="#512DA8"
                            title="Close" 
                            />
                    </View>
                </Modal> */}
        </ScrollView>
        </Animatable.View>
      );
    }
  };

const styles = StyleSheet.create({
  formRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    margin: 20
  },
  formLabel: {
      fontSize: 18,
      flex: 2
  },
  formItem: {
      flex: 1
  },
  modal: {
    justifyContent: 'center',
    margin: 20
 },
 modalTitle: {
     fontSize: 24,
     fontWeight: 'bold',
     backgroundColor: '#512DA8',
     textAlign: 'center',
     color: 'white',
     marginBottom: 20
 },
 modalText: {
     fontSize: 18,
     margin: 10
 }
});

export default Reservation;