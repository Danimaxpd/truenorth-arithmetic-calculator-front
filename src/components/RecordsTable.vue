<template>
  <div>
    <input
      v-model="filterText"
      type="text"
      placeholder="Search"
    >
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Operation ID</th>
          <th>User ID</th>
          <th>Amount</th>
          <th>User Balance</th>
          <th>Operation Response</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="record in filteredRecords"
          :key="record.id"
        >
          <td>{{ record.id }}</td>
          <td>{{ record.operation_id }}</td>
          <td>{{ record.user_id }}</td>
          <td>{{ record.amount }}</td>
          <td>{{ record.user_balance }}</td>
          <td>{{ record.operation_response }}</td>
          <td>{{ record.date }}</td>
        </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li
          class="page-item"
          :class="{ disabled: currentPage === 1 }"
        >
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click="changePage(currentPage - 1)"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          v-for="page in totalPages"
          :key="page"
          class="page-item"
          :class="{ active: currentPage === page }"
        >
          <a
            class="page-link"
            href="#"
            @click="changePage(page)"
          >{{ page }}</a>
        </li>
        <li
          class="page-item"
          :class="{ disabled: currentPage === totalPages }"
        >
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click="changePage(currentPage + 1)"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterText: '',
      currentPage: 1,
      totalPages: 0,
      recordsPerPage: 10,
      data: {
        records: [],
        metadata: {
          totalCount: 0,
          currentPage: 1,
          totalPages: 0
        }
      }
    };
  },
  computed: {
    filteredRecords() {
      const start = (this.currentPage - 1) * this.recordsPerPage;
      const end = start + this.recordsPerPage;
      return this.data.records.filter(record => {
        return (
          record.id.toString().includes(this.filterText) ||
          record.operation_id.toString().includes(this.filterText) ||
          record.user_id.toString().includes(this.filterText) ||
          record.amount.toString().includes(this.filterText) ||
          record.user_balance.toString().includes(this.filterText) ||
          record.operation_response.includes(this.filterText) ||
          record.date.includes(this.filterText)
        );
      }).slice(start, end);
    },
    fetchData(filters) {
      console.logs(filters);
      return false;
    },
  },
  mounted() {
    // Simulated API data response
    this.data = {
      "records": [
            {
                "id": 1,
                "operation_id": 1,
                "user_id": 1,
                "amount": 10,
                "user_balance": 90,
                "operation_response": "Success",
                "date": "2023-05-11T19:24:57.953Z",
                "deleted": false,
                "createdAt": "2023-05-11T19:24:57.953Z",
                "updatedAt": "2023-05-11T19:24:57.953Z"
            },
            {
                "id": 2,
                "operation_id": 6,
                "user_id": 1,
                "amount": 15,
                "user_balance": 75,
                "operation_response": "Success",
                "date": "2023-05-11T19:59:37.134Z",
                "deleted": false,
                "createdAt": "2023-05-11T19:59:37.134Z",
                "updatedAt": "2023-05-11T19:59:37.134Z"
            },
            {
                "id": 3,
                "operation_id": 2,
                "user_id": 1,
                "amount": 10,
                "user_balance": 0,
                "operation_response": "Success",
                "date": "2023-05-11T21:57:34.346Z",
                "deleted": false,
                "createdAt": "2023-05-11T21:57:34.346Z",
                "updatedAt": "2023-05-11T21:57:34.346Z"
            },
            {
                "id": 5,
                "operation_id": 1,
                "user_id": 1,
                "amount": 10,
                "user_balance": 920,
                "operation_response": "Success",
                "date": "2023-05-17T04:59:43.955Z",
                "deleted": false,
                "createdAt": "2023-05-17T04:59:43.955Z",
                "updatedAt": "2023-05-17T04:59:43.955Z"
            },
            {
                "id": 6,
                "operation_id": 1,
                "user_id": 1,
                "amount": 10,
                "user_balance": 910,
                "operation_response": "Success",
                "date": "2023-05-17T05:00:17.886Z",
                "deleted": false,
                "createdAt": "2023-05-17T05:00:17.886Z",
                "updatedAt": "2023-05-17T05:00:17.886Z"
            },
            {
                "id": 7,
                "operation_id": 1,
                "user_id": 1,
                "amount": 10,
                "user_balance": 900,
                "operation_response": "Success",
                "date": "2023-05-17T05:01:39.712Z",
                "deleted": false,
                "createdAt": "2023-05-17T05:01:39.712Z",
                "updatedAt": "2023-05-17T05:01:39.712Z"
            },
            {
                "id": 8,
                "operation_id": 1,
                "user_id": 1,
                "amount": 10,
                "user_balance": 890,
                "operation_response": "Success",
                "date": "2023-05-17T05:02:11.957Z",
                "deleted": false,
                "createdAt": "2023-05-17T05:02:11.957Z",
                "updatedAt": "2023-05-17T05:02:11.957Z"
            },
            {
                "id": 9,
                "operation_id": 1,
                "user_id": 1,
                "amount": 10,
                "user_balance": 880,
                "operation_response": "Success",
                "date": "2023-05-17T05:04:17.130Z",
                "deleted": false,
                "createdAt": "2023-05-17T05:04:17.130Z",
                "updatedAt": "2023-05-17T05:04:17.130Z"
            },
            {
                "id": 10,
                "operation_id": 1,
                "user_id": 1,
                "amount": 10,
                "user_balance": 870,
                "operation_response": "Success",
                "date": "2023-05-17T05:05:14.989Z",
                "deleted": false,
                "createdAt": "2023-05-17T05:05:14.989Z",
                "updatedAt": "2023-05-17T05:05:14.989Z"
            },
            {
                "id": 11,
                "operation_id": 1,
                "user_id": 1,
                "amount": 10,
                "user_balance": 860,
                "operation_response": "Success",
                "date": "2023-05-17T05:06:23.091Z",
                "deleted": false,
                "createdAt": "2023-05-17T05:06:23.091Z",
                "updatedAt": "2023-05-17T05:06:23.091Z"
            }
        ],
        "metadata": {
            "totalCount": 24,
            "currentPage": 1,
            "totalPages": 3
        }
    };

    // Set initial values
    this.currentPage = this.data.metadata.currentPage;
    this.totalPages = this.data.metadata.totalPages;
  },
  methods: {
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    }
  }
};
</script>
