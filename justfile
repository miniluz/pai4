default:
    @just --list

zip:
    @rm -f PAI2-ST6.zip
    @rm -rf **/*/__pycache__
    @7z a -tzip PAI4-ST6.zip PAI4-ST6.pdf package.json package-lock.json src .github .gitignore
