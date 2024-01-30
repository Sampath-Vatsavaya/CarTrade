export default{
    props: ['employee'],
    template: `
      <ul>
        <li>{{ employee.name }} 
          <com v-if="hasSubordinates" v-for="s in subordinates" v-bind:employee="s" v-bind:key="s.id"></com>
        </li>
      </ul>
    `,
    computed: {
      subordinates: function() {
        return roles.filter(sub => sub.manager_id === this.employee.id);
      },
      hasSubordinates: function() {
        return this.subordinates.length > 0;
      }
    }
  }
const roles = [
    {
      "id": "01",
      "name": "Satish",
      "des": "Admin",
      "manager_id": "-1"
    },
    {
      "id": "02",
      "name": "Suresh",
      "des": "Accountant",
      "manager_id": "01"
    },
    {
      "id": "03",
      "name": "Ganesh",
      "des": "HR",
      "manager_id": "01"
    },
    {
      "id": "04",
      "name": "Mahesh",
      "des": "TL",
      "manager_id": "01"
    },
    {
      "id": "05",
      "name": "Kamesh",
      "des": "Sr Programmer",
      "manager_id": "04"
    },
    {
      "id": "06",
      "name": "Kamalesh",
      "des": "Sr Programmer",
      "manager_id": "04"
    },
    {
      "id": "07",
      "name": "veeresh",
      "des": "Jr Programmer",
      "manager_id": "05"
    },
    {
      "id": "08",
      "name": "Ramesh",
      "des": "Jr Programmer",
      "manager_id": "06"
    },
    {
      "id": "09",
      "name": "Venkatesh",
      "des": "Jr Programmer",
      "manager_id": "06"
    },
    {
      "id": "10",
      "name": "Mangesh",
      "des": "Jr Programmer",
      "manager_id": "06"
    }
  ];