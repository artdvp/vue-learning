// Methods

new Vue({
  el: "#app",
  data: {
    newData: {
      empName: '',
      salary: 0
    },
    employees: [
      {
        empName: 'Sompong Manee',
        salary: 100000
      },
      {
        empName: 'Pongsuk Nanalong',
        salary: 56000
      }
    ]
  },
  methods: {
    addEmp: function(){
      if(this.newData.empName.trim() !== '' && this.newData.salary > 0){
        this.employees.push({
          empName: this.newData.empName,
          salary: this.newData.salary
        })
        this.newData.empName = ''
        this.newData.salary = 0
      }
    }
  }
});
