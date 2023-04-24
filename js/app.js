const getTarget = () => location.search.split('?')[1];

const main = async () => {
    target = getTarget();
    console.log(target);
}

main();
