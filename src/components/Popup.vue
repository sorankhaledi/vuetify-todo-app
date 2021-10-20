<template>
  <v-dialog max-width="500" v-model="dialog ">
    <template v-slot:activator="{ on, attrs }">
      <v-btn small v-bind="attrs" v-on="on" elevation="0" color="warning"
        >Create New Project
      </v-btn>
    </template>
    <v-card>
      <v-card-title> Create a new project </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            label="Title"
            v-model="title"
            prepend-icon="mdi-folder"
            :rules="inputRules"
          ></v-text-field>
          <v-textarea
            label="Information"
            v-model="content"
            prepend-icon="mdi-pencil"
            :rules="inputRules"
          ></v-textarea>

          <v-menu max-width="290" v-model="menu" :close-on-content-click="false">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                class="mt-3"
                :value="formattedDate"
                label="Due date"
                v-bind="attrs"
                prepend-icon="mdi-calendar"
                v-on="on"
                clearable
                readonly
                @click:clear="date = null"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" @change="menu = false"> </v-date-picker>
          </v-menu>

          <v-btn elevation="0" class="success mx-0" @click="submit" :loading="loading"
            >ADD PROJECT</v-btn
          >
          <v-btn @click="clear" elevation="0" class="error ml-2">
            Reset
          </v-btn>
          <v-btn elevation="0" @click="dialog = false" class="float-right">Close</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { format, parseISO } from "date-fns";
import db from '../fb';

export default {
  data() {
    return {
      title: "",
      content: "",
      date: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
      menu: false,
      inputRules: [(v) => v.length >= 3 || "Minimum length is 3 characters"],
      loading: false,
      dialog: false,
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const project = {
          title: this.title,
          content: this.content,
          due: this.date,
          person: 'The Net Ninja',
          status: 'ongoing'
        }

        db.collection('projects').add(project).then(() => {
          console.log('added to db');
          this.loading = false;
          this.dialog = false;
          this.$emit('projectAdded');
        });

      }
    },
    clear() {
      this.title = '';
      this.content = '';
      this.date = format(parseISO(new Date().toISOString()), 'EEEE, MMMM do yyyy');
    }
  },
  computed: {
    formattedDate() {
      return this.date ? format(parseISO(this.date), "EEEE, MMMM do yyyy") : "";
    },
  },
};
</script>
