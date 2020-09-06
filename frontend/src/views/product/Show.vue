<template>
  <div>
    <Toolbar :handle-delete="del">
      <template slot="left">
        <v-toolbar-title v-if="item">{{
          `${$options.servicePrefix} ${item['@id']}`
        }}</v-toolbar-title>
      </template>
    </Toolbar>

    <br />

    <div v-if="item" class="table-product-show">
      <v-simple-table>
        <template slot="default">
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>

              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>{{ $t('name') }}</strong></td>
              <td>
                                    {{ item['name'] }}
              </td>
            
              <td><strong>{{ $t('price') }}</strong></td>
              <td>
                {{ $n(item['price']) }}              </td>
            </tr>
            
            <tr>
              <td><strong>{{ $t('isAvailable') }}</strong></td>
              <td>
                                    {{ item['isAvailable'] }}
              </td>
            
              <td><strong>{{ $t('createdAt') }}</strong></td>
              <td>
                {{ formatDateTime(item['createdAt'], 'long') }}              </td>
            </tr>
            
            <tr>
              <td><strong>{{ $t('updatedAt') }}</strong></td>
              <td>
                {{ formatDateTime(item['updatedAt'], 'long') }}              </td>
            
              <td></td>
            </tr>
            
          </tbody>
        </template>
      </v-simple-table>
    </div>

    <Loading :visible="isLoading" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { mapFields } from 'vuex-map-fields';
import Loading from '../../components/Loading';
import ShowMixin from '../../mixins/ShowMixin';
import Toolbar from '../../components/Toolbar';

const servicePrefix = 'Product';

export default {
  name: 'ProductShow',
  servicePrefix,
  components: {
      Loading,
      Toolbar
  },
  mixins: [ShowMixin],
  computed: {
    ...mapFields('product', {
      isLoading: 'isLoading'
    }),
    ...mapGetters('product', ['find'])
  },
  methods: {
    ...mapActions('product', {
      deleteItem: 'del',
      reset: 'reset',
      retrieve: 'load'
    })
  }
};
</script>
