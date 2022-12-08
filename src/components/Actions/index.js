import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'

import styles from './styles'
import { AntDesign } from "@expo/vector-icons"
import { Theme } from '../../constants'

export default function Actions () {
  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.content} 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingStart: Theme.Sizes.defaultSpace}}
      >
        <TouchableOpacity style={styles.button} activeOpacity={0.6}>
          <View style={styles.iconArea}>
            <AntDesign style={styles.icon} name="scan1" />
          </View>
          <Text style={styles.label}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} activeOpacity={0.6}>
          <View style={styles.iconArea}>
            <AntDesign style={styles.icon} name="barcode" />
          </View>
          <Text style={styles.label}>Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} activeOpacity={0.6}>
          <View style={styles.iconArea}>
            <AntDesign style={styles.icon} name="upload" />
          </View>
          <Text style={styles.label}>Transfer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} activeOpacity={0.6}>
          <View style={styles.iconArea}>
            <AntDesign style={styles.icon} name="hearto" />
          </View>
          <Text style={styles.label}>Favourites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} activeOpacity={0.6}>
          <View style={styles.iconArea}>
            <AntDesign style={styles.icon} name="barchart" />
          </View>
          <Text style={styles.label}>Invest</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} activeOpacity={0.6}>
          <View style={styles.iconArea}>
            <AntDesign style={styles.icon} name="download" />
          </View>
          <Text style={styles.label}>Download</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}