<script>
/* 患者的信息 */
const patient = {
  id: 1,
  username: "谁知道",
  uri: "",
  phone: "111144555",
  money: 235623,
  password: "156334"
};
/* 全部医生 */
const doctor = [
  {
    id: 1,
    username: "医科圣手",
    uri: "",
    position: "主任医师",
    year: 17,
    hospital: "成都市第一医院"
  },
  {
    id: 2,
    username: "扁鹊",
    uri: "",
    position: "院长",
    year: 17,
    hospital: "华西医院"
  }
];
/* 关注的医生 */
const conDoctor = [
  {
    id: 1,
    username: "医科圣手",
    uri: "",
    position: "主任医师",
    year: 17,
    hospital: "成都市第一医院"
  }
];
function setDoctor(newdoctor) {
  this.doctor = newdoctor;
}
export default {
  patient,
  doctor,
  conDoctor,
  setDoctor
};
</script>
