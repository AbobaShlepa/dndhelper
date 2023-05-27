<script lang="ts">
    let selectedIds : number[] = [];

    const items = [
        { id: 1, name: 'Ребис', pros: ['Восстанавливает 1d4 хп на 1d4 ходов'], cons: [''] },
        { id: 2, name: 'Гидроген', pros: ['Находясь в воде восстанавливает 1d4 хп за 15'], cons: [''] },
    ]

    $: selectedItems = items.filter(x => selectedIds.includes(x.id));
</script>