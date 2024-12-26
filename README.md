bun install:

    Windows: powershell -c "irm bun.sh/install.ps1 | iex"
    Linux/macOs: curl -fsSL https://bun.sh/install | bash
	
bun initial:

    bun create vite
    enter project name
    select "React"
    select "JavaScript + SWC"
    enter "cd [project name]"
    enter "bun install"
	
change script:

    go "package.json"
    change "dev" value into "bun --bun vite"
    enter "bun run dev" to create local website
