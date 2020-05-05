 
</template><template>
  <div class="container">

       <h2>{{ Mensaje }} </h2>
       <table>
          <thead>
             <tr>
             <th>Fecha</th>
             <th>Cliente</th>
             <th>Documento</th>
             <th>Pdf</th>
             <th>Xml</th>
             <th>Adjuntar Docs</th>
             <th>Enviar</th>
             </tr>
          </thead>
          <tbody>
             <tr v-for="Factura in Facturas" :key="Factura.id_fact_elctrnca">
                  <td>{{Factura._07_fcha_fctra}}</td>
                  <td>{{Factura._06_emprsa}}</td>
                  <td>{{Factura.prefijo}}-{{Factura.folio}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><button>Enviar</button></td>
             </tr>
          </tbody>
       </table>

      
  </div>
</template>

<script>
 

 import { FacturaElectronica } from '@/config/services';
 const Factura = new  FacturaElectronica('facturas'); 

export default {
  name: 'UltimasFacturasCreadas',
  data: () => ({
    Facturas: [],
    Mensaje:'Últimos documentos generados generados',
  }),
 
  created: async function() {
    let response =  await Factura.UltimasCreadas();
    this.Facturas = response.data.data; 
 }

}
</script>

<style>

</style>
