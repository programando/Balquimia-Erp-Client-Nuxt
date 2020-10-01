<template>
  <div>
        <label v-if="label"
            class="form-label block mb-1 font-semibold text-gray-700"
            :for="id">
               {{ label }}
          </label >    
          <div class="relative">
            <input class="rounded px-4 w-full py-1 bg-gray-200 text-sm border border-gray-400 text-gray-700 placeholder-gray-700 focus:bg-white outline-none" 
                :id="id"
                ref="input"
                v-bind="$attrs"       
                :class="[
                    {
                        'border-red-400': errors.length
                    },
                ]"
                :type    = "type"
                :value   = "value"
                @input   = "$emit('input', $event.target.value)"
                @keydown = "$emit('keydown', $event)"
                @blur    = "$emit('blur', $event)"
                @keyup   = "$emit('keyup', $event)"
            />
            <div v-if="errors.length" class="text-red-600 mt-1 text-xs ml-1">
                <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> {{ errors[0] }}
            </div>
        </div>        
  </div>
</template>

<script>
    export default {
        name: 'InputTextBasic',
        inheritAttrs: false,

        props: {
            id: {
                type: String,
                default() {
                    return `text-input-${this._uid}`;
                }
            },
            type: {
                type: String,
                default: "text"
            },
            value: String,
            label: String,
            errors: {
                type: Array,
                default: () => []
            },

        }, 
    }
</script>