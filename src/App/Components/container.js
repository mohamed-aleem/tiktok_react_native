import React from 'react';
import {View, SafeAreaView} from 'react-native';

export default (props) => {
  let styles = {};

  if (props.rtl) {
    styles.direction = 'rtl';
  }

  if (props.ltr) {
    styles.direction = 'ltr';
  }

  if (props.w100) {
    styles.width = '100%';
  }
  if (props.w90) {
    styles.width = '90%';
  }
  if (props.w75) {
    styles.width = '75%';
  }

  if (props.w50) {
    styles.width = '50%';
  }

  if (props.w33) {
    styles.width = '33%';
  }
  if (props.w25) {
    styles.width = '25%';
  }

  if (props.w) {
    styles.width = props.w;
  }
  if (props.h) {
    styles.height = props.h;
  }

  if (props.maxH) {
    styles.maxHeight = props.maxH;
  }

  if (props.of) {
    styles.overflow = 'hidden';
  }
  if (props.m) {
    styles.margin = props.m;
  }
  if (props.mt) {
    styles.marginTop = props.mt;
  }
  if (props.mb) {
    styles.marginBottom = props.mb;
  }
  if (props.ml) {
    styles.marginLeft = props.ml;
  }
  if (props.mr) {
    styles.marginRight = props.mr;
  }
  if (props.mv) {
    styles.marginVertical = props.mv;
  }
  if (props.mh) {
    styles.marginHorizontal = props.mh;
  }
  if (props.me) {
    styles.marginEnd = props.me;
  }
  if (props.mst) {
    styles.marginStart = props.mst;
  }

  if (props.p) {
    styles.padding = props.p;
  }
  if (props.pt) {
    styles.paddingTop = props.pt;
  }
  if (props.pb) {
    styles.paddingBottom = props.pb;
  }
  if (props.pl) {
    styles.paddingLeft = props.pl;
  }
  if (props.pr) {
    styles.paddingRight = props.pr;
  }
  if (props.pv) {
    styles.paddingVertical = props.pv;
  }
  if (props.ph) {
    styles.paddingHorizontal = props.ph;
  }

  if (props.rad) {
    styles.borderRadius = props.rad;
  }

  if (props.bw) {
    styles.borderWidth = props.bw;
  }
  if (props.bc) {
    styles.borderColor = props.bc;
  }
  if (props.clr) {
    styles.backgroundColor = props.clr;
  }

  if (props.opacity) {
    styles.opacity = props.opacity;
  }

  if (props.br) {
    styles.borderRadius = props.br;
  }

  if (props.center) {
    styles.alignItems = 'center';
    styles.justifyContent = 'center';
  }

  if (props.f1) {
    styles.flex = 1;
  }
  if (props.spaceBetween) {
    styles.justifyContent = 'space-between';
  }
  if (props.spaceAround) {
    styles.justifyContent = 'space-around';
  }
  if (props.fEnd) {
    styles.justifyContent = 'flex-end';
  }
  if (props.fStart) {
    styles.justifyContent = 'flex-start';
  }
  if (props.vCenter) {
    styles.alignItems = 'center';
  }

  if (props.hCenter) {
    styles.justifyContent = 'center';
  }
  if (props.hRight) {
    styles.alignItems = 'flex-start';
  }
  if (props.hLeft) {
    styles.alignItems = 'flex-end';
  }
  if (props.row) {
    styles.flexDirection = 'row';
    
  }

  if (props.noWrap) {
    styles.flexWrap = 'nowrap';
  }

  if (props.abs) {
    styles.position = 'absolute';
  }
  if (props.left) {
    styles.left = props.left;
  }
  if (props.right) {
    styles.right = props.right;
  }
  if (props.top) {
    styles.top = props.top;
  }
  if (props.bottom) {
    styles.bottom = props.bottom;
  }

  if (props.borderd) {
    styles.borderColor = props.bc;
    styles.borderWidth = 1;
  }

  if (props.shadow) {
    styles.shadowColor = 'black';
    styles.shadowOpacity = 0.1;
    styles.shadowOffset = {width: 2, height: 0};
    styles.shadowRadius = 3;
  }

  let color = props.color;
  let borderStyle = props.borderStyle;
  let cornerRadiusStyle = props.cornerRadiusStyle;
  let flexDirection = props.isRow ? 'row' : 'column';
  let showSafeArea = props.showSafeArea || false;
  let safeAreaColor = props.safeAreaColor 

  return (
    <View
      style={[
        {
          backgroundColor: color,
          flexDirection: flexDirection,
        },
        props.style,
        styles,
      ]}>
      {showSafeArea && (
        <SafeAreaView style={{backgroundColor: safeAreaColor}} />
      )}
      {props.children}
    </View>
  );
};
