class GitHub {
    constructor() {
        this.client_id = '07c1333a0bf6b02fa1b0';
        this.client_secret = '9af9d6601dc7f7b4447b5565241a2133c3d8fd18';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    
    async getUser(user) {
        // add client_id and client_secret at the end
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
            // repos : repos
        }
    }
}