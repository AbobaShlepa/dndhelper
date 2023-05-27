<script lang="ts">
    import { elementStore } from "../stores/elementStore";

    const pattern = 'rhvakcesRHVAKCES';
    const allowedChars = Array.from(pattern).map(value => value.charCodeAt(0));

    let formula: string = '';

    function handle(event: any) {
        const input: string = event?.target?.value as string;
        elementStore.updateElements(input);
    }   

    function validate(event: any) {
        if (!allowedChars.includes(event.charCode)){
            event.preventDefault();
        } 
    }
</script>

<h6>Алхимическая формула</h6>
<input type="text" value={formula} on:input={handle} on:keypress={validate} maxlength="6">

<style>
    input {
        border-radius: 50px;
    }
</style>