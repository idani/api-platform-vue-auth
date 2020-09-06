<template>
  <v-form>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model="item.name"
            :error-messages="nameErrors"
            :label="$t('name')"
            @input="$v.item.name.$touch()"
            @blur="$v.item.name.$touch()"
          />
        </v-col>
      
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model.number="item.price"
            :error-messages="priceErrors"
            :label="$t('price')"
            @input="$v.item.price.$touch()"
            @blur="$v.item.price.$touch()"
          />
        </v-col>
      </v-row>
      
      <v-row>
        <v-col cols="12" sm="6" md="6">
          <v-checkbox
            v-model="item.isAvailable"
            :error-messages="isAvailableErrors"
            :label="$t('isAvailable')"
            @input="$v.item.isAvailable.$touch()"
            @blur="$v.item.isAvailable.$touch()"
          />
        </v-col>
      
        <!-- todo : fix the dateTime format, not supported by default on vuetify -->
        <v-col cols="12" sm="6" md="6">
          <InputDate
            v-model="item.createdAt"
            :label="$t('createdAt')"
            :error-messages="createdAtErrors"
          />
        </v-col>
      </v-row>
      
      <v-row>
        <!-- todo : fix the dateTime format, not supported by default on vuetify -->
        <v-col cols="12" sm="6" md="6">
          <InputDate
            v-model="item.updatedAt"
            :label="$t('updatedAt')"
            :error-messages="updatedAtErrors"
          />
        </v-col>
      
        <v-col cols="12"></v-col>
      </v-row>
      
    </v-container>
  </v-form>
</template>

<script>
import has from 'lodash/has';
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
import { mapActions } from 'vuex';
import { mapFields } from 'vuex-map-fields';
import InputDate from '../InputDate';
import { date } from '../../validators/date';

export default {
  name: 'ProductForm',
  mixins: [validationMixin],
  components: {
    InputDate,
  },
  props: {
    values: {
      type: Object,
      required: true
    },

    errors: {
      type: Object,
      default: () => {}
    },

    initialValues: {
      type: Object,
      default: () => {}
    }
  },
  mounted() {
  },
  data() {
    return {
        name: null,
        price: null,
        isAvailable: null,
        createdAt: null,
        updatedAt: null,
    };
  },
  computed: {

    // eslint-disable-next-line
    item() {
      return this.initialValues || this.values;
    },

    nameErrors() {
      const errors = [];

      if (!this.$v.item.name.$dirty) return errors;

      has(this.violations, 'name') && errors.push(this.violations.name);


      return errors;
    },
    priceErrors() {
      const errors = [];

      if (!this.$v.item.price.$dirty) return errors;

      has(this.violations, 'price') && errors.push(this.violations.price);


      return errors;
    },
    isAvailableErrors() {
      const errors = [];

      if (!this.$v.item.isAvailable.$dirty) return errors;

      has(this.violations, 'isAvailable') && errors.push(this.violations.isAvailable);


      return errors;
    },
    createdAtErrors() {
      const errors = [];

      if (!this.$v.item.createdAt.$dirty) return errors;

      has(this.violations, 'createdAt') && errors.push(this.violations.createdAt);


      return errors;
    },
    updatedAtErrors() {
      const errors = [];

      if (!this.$v.item.updatedAt.$dirty) return errors;

      has(this.violations, 'updatedAt') && errors.push(this.violations.updatedAt);


      return errors;
    },

    violations() {
      return this.errors || {};
    }
  },
  methods: {
  },
  validations: {
    item: {
      name: {
      },
      price: {
      },
      isAvailable: {
      },
      createdAt: {
        date,
      },
      updatedAt: {
        date,
      },
    }
  }
};
</script>
