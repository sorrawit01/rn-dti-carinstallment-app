import React, { useState } from "react";

import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const car = require("../assets/images/car.png");

const down_payment = [5, 10, 15, 20, 25, 30, 35];
const month_option = [24, 36, 48, 60, 72, 84];

export default function Input() {
  const [carprice, setcarprice] = useState("");
  const [cardownpayment, setcardownpayment] = useState("");
  const [carmonth, setcarmonth] = useState("");
  const [carinterest, setcarinterest] = useState("");
  const [carinstallment, setcarinstallment] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <Image source={car} style={styles.car} />
        <View style={styles.inputContainer}>
          <Text style={{ fontFamily: "Kanit_700Bold", fontSize: 32 }}>
            คำนวณค่างวดรถ
          </Text>
          <Text style={styles.inputTitle}>ราคารถ (บาท)</Text>
          <TextInput
            placeholder="เช่น 900000"
            keyboardType="numeric"
            style={styles.inputValue}
            value={carprice}
            onChangeText={setcarprice}
          />
          {/* เลือกเงินดาวน์ */}
          <Text style={styles.inputTitle}>เลือกเงืนดาวน์ (%)</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {down_payment.map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.downpayment,
                  cardownpayment === item.toString() &&
                    styles.downpaymentSelect,
                ]}
                onPress={() => setcardownpayment(item.toString())}
              >
                <Text
                  style={[
                    styles.downlabel,
                    cardownpayment === item.toString() &&
                      styles.downlabelSelect,
                  ]}
                >
                  {item}%
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          {/* เลือกระยะเวลา */}
          <Text style={styles.inputTitle}>ระยะเวลาผ่อน (งวด)</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {month_option.map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.monthoption,
                  carmonth === item.toString() && styles.monthoptionSelect,
                ]}
                onPress={() => setcarmonth(item.toString())}
              >
                <Text
                  style={[
                    styles.monthlabel,
                    carmonth === item.toString() && styles.monthlabelSelect,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          {/* ป้อนดอกเบี้ย */}
          <Text style={styles.inputTitle}>ดอกเบี้ย (% ต่อปี)</Text>
          <TextInput
            placeholder="เช่น 2.59"
            keyboardType="numeric"
            style={styles.inputValue}
            value={carinterest}
            onChangeText={setcarinterest}
          />
          {/* ปุ่มคำนวณค่างวด */}
          <TouchableOpacity style={styles.btnCal}>
            <Text style={styles.labelCal}>คำนวณค่างวด</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  labelCal: {
    fontFamily: "Kanit_600SemiBold",
    fontSize: 21,
    color: "#ffffff",
  },
  btnCal: {
    backgroundColor: "#0105ffc4",
    padding: 25,
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  downlabel: {
    fontFamily: "Kanit_600SemiBold",
    fontSize: 16,
    color: "#777777",
  },
  downpayment: {
    backgroundColor: "#f1f5f9",
    padding: 15,
    margin: 5,
  },
  downpaymentSelect: {
    backgroundColor: "#000000",
  },
  downlabelSelect: {
    backgroundColor: "#434141",
  },
  monthlabel: {
    fontFamily: "Kanit_600SemiBold",
    fontSize: 16,
    color: "#777777",
  },
  monthoption: {
    backgroundColor: "#ffffff",
    padding: 15,
    margin: 5,
  },
  monthoptionSelect: {
    backgroundColor: "#000000",
  },
  monthlabelSelect: {
    backgroundColor: "#434141",
  },
  inputValue: {
    fontFamily: "Kanit_400Regular",
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "rgba(180, 178, 178, 0.27)",
    backgroundColor: "#afafafab",
  },
  inputTitle: {
    fontFamily: "Kanit_600SemiBold",
    fontSize: 18,
    color: "#353434cc",
    marginTop: 18,
  },
  inputContainer: {
    backgroundColor: "#ffffff",
    marginTop: -30,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },
  car: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
});
