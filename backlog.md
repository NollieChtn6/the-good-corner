# Backlog "The Good Corner"

Last updated on: October, 13, 2024

## Backend
- [ ] Update database seeding scripts
  - [ ] remove several categories
  - [ ] re distribute ads accordingly
  - [ ] re write associations in ad_has_tags table

## Frontend
- [ ] Feature: edit ad
  - [ ] create editing form
  - [ ] implement request on PATCH 'http://localhost:3000/api/ads/:id/update'
- [ ] Feature: delete ad
  - [ ] create warning popup
  - [ ] implement request on DELETE 'http://localhost:3000/api/ads/:id/delete'
- [ ] Check data types before submitting forms
  - [ ] validate create form
  - [ ] validate edit form
  - [ ] display errors on UI
- [ ] Feature: display ads by category
  - [ ] create route '/catégories/:id/annonces'
  - [ ] create dedicated page
- [ ] Feature: search bar in header
- [ ] Fix: updated ad not displayed after update