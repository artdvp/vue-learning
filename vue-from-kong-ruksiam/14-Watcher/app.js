new Vue({
  el: "#app",
  data() {
    return {
      newData: {
        empName: "",
        salary: 0
      },
      employees: [
        {
          empName: "Sompong Manee",
          salary: 100000
        },
        {
          empName: "Pongsuk Nanalong",
          salary: 56000
        }
      ]
    };
  },
  // return value -> is getter cannot set argument
  computed: {
    summation: function() {
      let sumsal = this.employees.reduce(function(value, data) {
        return value + Number(data.salary);
      }, 0);
      return sumsal;
    },
    avg: function() {
      let sumsal = this.employees.reduce(function(value, data) {
        return value + Number(data.salary);
      }, 0);
      return sumsal / this.employees.length;
    }
  },
  methods: {
    addEmp: function() {
      if (this.newData.empName.trim() !== "" && this.newData.salary > 0) {
        this.employees.push({
          empName: this.newData.empName,
          salary: this.newData.salary
        });
        this.newData.empName = "";
        this.newData.salary = 0;
      }
    },
    summation2: function(a, b) {
      return a + b;
    },
    showMessage: function(val) {
      alert("Ok Complete done "+ val );
    }
  },
  watch: {
    // after avg complete is doing in watch
    // avg: function() {
    //   // doing after avg
    //   this.showMessage('avg');
    // },
    summation: function(){
      this.showMessage('summation');
    }
  }
});
