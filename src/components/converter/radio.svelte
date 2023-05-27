<script lang="ts">
  interface RadioProps {
    labelFor: string;
    labelText: string;
    inputName: string;
    inputValue: number;
  }
  
  export let props: RadioProps;
  export let selected: any;
</script>

<div>
  <label for="{props.labelFor}}">{props.labelText}</label>
  <input name="{props.inputName}" type="radio" value="{props.inputValue}" bind:group={selected} />
</div>