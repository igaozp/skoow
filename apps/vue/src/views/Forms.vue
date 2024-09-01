<template>
  <!-- 文本 -->
  <p>Message is: {{ message }}</p>
  <input v-model="message" placeholder="edit me"/>

  <!-- 多行文本 -->
  <span>Multiline message is</span>
  <p style="white-space: pre-line">{{ message }}</p>
  <textarea v-model="message" placeholder="add multiple lines"></textarea>

  <input type="checkbox" id="checkbox" v-model="checked"/>
  <label for="checkbox">{{ checked }}</label>

  <!-- 复选 -->
  <div>Checked names: {{ checkedNames }}</div>
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames"/>
  <label for="jack">Jack</label>

  <input type="checkbox" id="john" value="John" v-model="checkedNames"/>
  <label for="john">John</label>

  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames"/>
  <label for="mike">Mike</label>

  <!-- 单选 -->
  <div>Picked: {{ picked }}</div>

  <input type="radio" id="one" value="One" v-model="picked"/>
  <label for="one">One</label>

  <input type="radio" id="two" value="Two" v-model="picked"/>
  <label for="two">Two</label>

  <!-- 选择器 -->
  <div>Selected: {{ selected }}</div>
  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>

  <!-- 多选 -->
  <div>Selected: {{ selectedList }}</div>
  <select v-model="selectedList" multiple>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>

  <!-- 多选动态渲染 -->
  <select v-model="selectedBind">
    <option v-for="option in options" :value="option.value">
      {{ option.text }}
    </option>
  </select>
  <div>Selected: {{ selectedBind }}</div>

  <input type="checkbox" v-model="toggle" true-value="yes" false-value="no"/>
  <div>{{ toggle }}</div>

  <input type="radio" v-model="pick" :value="first" id="first"/>
  <label for="first">first</label>
  <input type="radio" v-model="pick" :value="second" id="second"/>
  <label for="second">second</label>
  <div>{{ pick }}</div>

  <div>Lazy Input: {{ lazyContent }}</div>
  <input v-model.lazy="lazyContent"/>

  <div>Trim: {{ trim }}</div>
  <input v-model.trim="trim"/>
</template>

<script setup lang="ts">
import {ref} from "vue";

const message = ref(null);

const checked = ref(true);

const checkedNames = ref([]);

const picked = ref("One");

const selected = ref("");

const selectedList = ref([]);

const selectedBind = ref("A");
const options = ref([
  {text: "One", value: "A"},
  {text: "Two", value: "B"},
  {text: "Three", value: "C"},
]);

const toggle = ref(null);

const pick = ref(null);
const first = ref("first");
const second = ref("second");

const lazyContent = ref(null);

const trim = ref(null);
</script>

<style scoped></style>
