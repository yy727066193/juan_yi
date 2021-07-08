<template>
  <div class="add">
    <van-nav-bar
      :title="title"
      safe-area-inset-top/>
    <van-form>
      <van-field
        v-model="ruleForm.orderNumber"
        name="orderNumber"
        label="订单号"
        placeholder="订单号"
        :rules="rules.orderNumber"
        required/>
      <van-field
        readonly
        clickable
        v-model="ruleForm.procuringAgency"
        name="procuringAgency"
        label="采购方"
        placeholder="采购方"
        @click="showPickerProcuringAgency = true"
        required/>
      <van-field
        v-model="ruleForm.purchasingAddress"
        name="purchasingAddress"
        label="采购地址"
        placeholder="采购地址"
        :rules="rules.purchasingAddress"
        required/>
      <van-field
        readonly
        clickable
        v-model="ruleForm.category"
        name="category"
        label="品类"
        placeholder="品类"
        @click="showPickerCategory = true"
        required/>
      <van-field
        v-model="ruleForm.itemName"
        name="itemName"
        label="物品名"
        placeholder="物品名"
        :rules="rules.itemName"
        required/>
      <van-field
        v-model="ruleForm.size"
        name="size"
        label="规格"
        placeholder="规格"
        :rules="rules.size"
        required/>
      <van-field
        v-model="ruleForm.color"
        name="color"
        label="颜色"
        placeholder="颜色"
        :rules="rules.color"
        required/>
      <van-field
        v-model="ruleForm.number"
        type="digit"
        name="number"
        label="数量"
        placeholder="数量"
        :rules="rules.number"
        required/>
      <div style="margin: 16px;">
        <van-button
          type="primary"
          size="normal"
          block
          native-type="submit"
          @click="onSubmit">提交</van-button>
      </div>
    </van-form>

    <van-popup
      v-model:show="showPickerProcuringAgency"
      position="bottom"
      :safe-area-inset-bottom="true"
      :overlay="true">
      <van-picker
        show-toolbar
        :columns="procuringAgencyColumns"
        :columns-field-names="procuringAgencyCustomFieldName"
        @confirm="onConfirmProcuringAgency"
        @cancel="showPickerProcuringAgency = false"/>
    </van-popup>
    <van-popup
      v-model:show="showPickerCategory"
      position="bottom"
      :safe-area-inset-bottom="true"
      :overlay="true">
      <van-picker
        show-toolbar
        :columns="categoryColumns"
        :columns-field-names="categoryCustomFieldName"
        @confirm="onConfirmCategory"
        @cancel="showPickerCategory = false"/>
    </van-popup>
  </div>
</template>

<script>
import {
  Form,
  Field,
  Button,
  NavBar,
  Picker,
  Popup,
  Cell,
  NumberKeyboard,
} from 'vant';

export default {
  name: 'Add',
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button,
    [NavBar.name]: NavBar,
    [Picker.name]: Picker,
    [Popup.name]: Popup,
    [Cell.name]: Cell,
    [NumberKeyboard.name]: NumberKeyboard,
  },
  data() {
    return {
      title: '新增/编辑订单',
      ruleForm: {
        orderNumber: '',
        procuringAgency: '',
        procuringAgencyId: null,
        purchasingAddress: '',
        categoryId: null,
        category: '',
        itemName: '',
        size: '',
        color: '',
        number: null,
      },
      rules: {
        orderNumber: [{ required: true, message: '请输入订单号' }],
        procuringAgency: [{ required: true, message: '请选择采购方' }],
        purchasingAddress: [{ required: true, message: '请输入采购地址' }],
        itemName: [{ required: true, message: '请输入物品名' }],
        size: [{ required: true, message: '请输入规格' }],
        color: [{ required: true, message: '请输入颜色' }],
      },
      showPickerProcuringAgency: false,
      procuringAgencyColumns: [
        { id: 1, name: '淘宝' },
        { id: 2, name: '京东' },
        { id: 3, name: '1688' },
        { id: 4, name: '拼多多' },
      ],
      procuringAgencyCustomFieldName: { text: 'name' },
      showPickerCategory: false,
      categoryColumns: [
        { id: 1, name: '电器' },
        { id: 2, name: '食品' },
        { id: 3, name: '衣服' },
        { id: 4, name: '办公用品' },
        { id: 5, name: '书籍' },
      ],
      categoryCustomFieldName: { text: 'name' },
      showNumber: false,
    };
  },
  methods: {
    onConfirmProcuringAgency(value) {
      this.ruleForm.procuringAgencyId = value.id;
      this.ruleForm.procuringAgency = value.name;
      this.showPickerProcuringAgency = false;
    },
    onConfirmCategory(value) {
      this.ruleForm.categoryId = value.id;
      this.ruleForm.category = value.name;
      this.showPickerCategory = false;
    },
    onSubmit() {
      console.log(JSON.stringify(this.ruleForm));
    },
  },
};
</script>
