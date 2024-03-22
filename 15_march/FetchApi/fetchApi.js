// Fetch Api through Http Methods
// The fetch API accesses resoueces across the network.
// You can makr Http requests (using GET, POST and other Methods), download, and upload files.


// resource: the URL String, or a request Object
// options: the configuration object


async function fetchData() {
    const response = await fetch("/data");
    console.log(response);
}