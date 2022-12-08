import React from 'react'
import { ScrollView, TouchableOpacity, View, Text } from 'react-native'

import styles from './styles'
import { Theme } from '../../constants'

import Chart from "../../components/Chart"
import HistoricMoviments from '../../components/HistoricMoviments'

export default function Moviments () {
  return (
    <View style={styles.container}>

      <Chart/>
      
      <ScrollView 
        style={styles.controls}
        horizontal={true} 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={{paddingStart: Theme.Sizes.defaultSpace, paddingEnd: 5}}
      >
        
        <TouchableOpacity style={styles.option} activeOpacity={0.6}>
          <Text style={styles.label}>January</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option} activeOpacity={0.6}>
          <Text style={styles.label}>February</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option} activeOpacity={0.6}>
          <Text style={styles.label}>March</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option} activeOpacity={0.6}>
          <Text style={styles.label}>April</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option} activeOpacity={0.6}>
          <Text style={styles.label}>May</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option} activeOpacity={0.6}>
          <Text style={styles.label}>June</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option} activeOpacity={0.6}>
          <Text style={styles.label}>Jully</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option} activeOpacity={0.6}>
          <Text style={styles.label}>August</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option} activeOpacity={0.6}>
          <Text style={styles.label}>September</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option} activeOpacity={0.6}>
          <Text style={styles.label}>October</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option} activeOpacity={0.6}>
          <Text style={styles.label}>November</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option} activeOpacity={0.6}>
          <Text style={styles.label}>December</Text>
        </TouchableOpacity>
      
      </ScrollView>

      <HistoricMoviments/>

    </View>
  )
}