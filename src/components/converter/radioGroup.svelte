<script lang="ts">
    import Radio from "./radio.svelte";

    export let selectedValue: number;

    const values = [
      { labelFor: 'etos-stater', labelText: 'Этос, Статер', inputName: 'country', inputValue: 1 },
      { labelFor: 'ioniya-gekt', labelText: 'Иония, Гект', inputName: 'country', inputValue: 2 },
      { labelFor: 'ioniya-gektor', labelText: 'Иония, Гектор', inputName: 'country', inputValue: 3 },
      { labelFor: 'eoliya-drahma', labelText: 'Эолия, Драхма', inputName: 'country', inputValue: 4 },
      { labelFor: 'eoliya-tedivadrahma', labelText: 'Эолия, Тетрадрахма', inputName: 'country', inputValue: 5 },
      { labelFor: 'miklidiya-drahma', labelText: 'Миклидия, Драхма', inputName: 'country', inputValue: 6 },
      { labelFor: 'miklidiya-tedivadrahma', labelText: 'Миклидия, Тетрадрахма', inputName: 'country', inputValue: 7 },
      { labelFor: 'settiya-sdinnar', labelText: 'Сеттия, Серебрянный Диннар', inputName: 'country', inputValue: 8 },
      { labelFor: 'dariya-mdinar', labelText: 'Дария, Медный Диннар', inputName: 'country', inputValue: 9 },
      { labelFor: 'dariya-sdinar', labelText: 'Дария, Серебрянный Диннар', inputName: 'country', inputValue: 10 },
      { labelFor: 'dariya-zdinar', labelText: 'Дария, Золотой Диннар', inputName: 'country', inputValue: 11 },
    ]
</script>

{#each values as value}
  <Radio props={value} bind:selected={selectedValue}/>
{/each}
