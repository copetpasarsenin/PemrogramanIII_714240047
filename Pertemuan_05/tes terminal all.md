PS C:\Users\achma\Documents\tugas pbo t2> cd "C:\Users\achma\Documents\tugas pbo t2\pertemuan4-backend"
>> 
PS C:\Users\achma\Documents\tugas pbo t2\pertemuan4-backend> go test -v -count=1 -run ^TestInsertMahasiswa$ ./repository_test/
>> 
=== RUN   TestInsertMahasiswa
✅ Koneksi ke PostgreSQL (Supabase) BERHASIL
INSERTED NPM: 1775902659563901000
--- PASS: TestInsertMahasiswa (1.70s)
PASS
ok      pertemuan4-backend/repository_test      2.054s
PS C:\Users\achma\Documents\tugas pbo t2\pertemuan4-backend> go test -v -count=1 -run ^TestGetAllMahasiswa$ ./repository_test/
>>
=== RUN   TestGetAllMahasiswa
✅ Koneksi ke PostgreSQL (Supabase) BERHASIL
DATA DI TABLE: [{NPM:1775901735580362700 Nama:Test User Prodi:Informatika Alamat:Bandung Email:testuser@mail.com Hobi:[Coding] NoHP:081234567890} {NPM:1775901745701955400 Nama:Test User Prodi:Informatika Alamat:Bandung Email:testuser@mail.com Hobi:[Coding] NoHP:081234567890} {NPM:1775901747128786900 Nama:Find User Prodi:Informatika Alamat:Jakarta Email:finduser@mail.com Hobi:[Reading] NoHP:089876543210} {NPM:1775901747915775600 Nama:New Namez Prodi:SI Alamat:Jakarta Email:before@mail.com Hobi:[Gaming] NoHP:082222222222} {NPM:1775902197481366700 Nama:Test User Prodi:Informatika Alamat:Bandung Email:testuser@mail.com Hobi:[Coding] NoHP:081234567890} {NPM:1775902335260499700 Nama:Find User Prodi:Informatika Alamat:Jakarta Email:finduser@mail.com Hobi:[Reading] NoHP:089876543210} {NPM:1775902347200367900 Nama:New Namez Prodi:SI Alamat:Jakarta Email:before@mail.com Hobi:[Gaming] NoHP:082222222222} {NPM:1775902659563901000 Nama:Test User Prodi:Informatika Alamat:Bandung Email:testuser@mail.com Hobi:[Coding] NoHP:081234567890}]
--- PASS: TestGetAllMahasiswa (0.73s)
PASS
ok      pertemuan4-backend/repository_test      1.175s
PS C:\Users\achma\Documents\tugas pbo t2\pertemuan4-backend> go test -v -count=1 -run ^TestGetMahasiswaByNPM$ ./repository_test/
>>
=== RUN   TestGetMahasiswaByNPM
✅ Koneksi ke PostgreSQL (Supabase) BERHASIL
DATA DITEMUKAN: {NPM:1775902759955061200 Nama:Find User Prodi:Informatika Alamat:Jakarta Email:finduser@mail.com Hobi:[Reading] NoHP:089876543210}
--- PASS: TestGetMahasiswaByNPM (0.91s)
PASS
ok      pertemuan4-backend/repository_test      1.282s
PS C:\Users\achma\Documents\tugas pbo t2\pertemuan4-backend> go test -v -count=1 -run ^TestUpdateMahasiswa$ ./repository_test/
>>
=== RUN   TestUpdateMahasiswa
✅ Koneksi ke PostgreSQL (Supabase) BERHASIL
UPDATE BERHASIL untuk NPM: 1775902795931313300
--- PASS: TestUpdateMahasiswa (0.88s)
PASS
ok      pertemuan4-backend/repository_test      1.296s
PS C:\Users\achma\Documents\tugas pbo t2\pertemuan4-backend> go test -v -count=1 -run ^TestDeleteMahasiswa$ ./repository_test/
>>
=== RUN   TestDeleteMahasiswa
✅ Koneksi ke PostgreSQL (Supabase) BERHASIL
DELETE BERHASIL untuk NPM: 1775902827515201700
--- PASS: TestDeleteMahasiswa (1.79s)
PASS
ok      pertemuan4-backend/repository_test      2.238s
PS C:\Users\achma\Documents\tugas pbo t2\pertemuan4-backend> ^C
PS C:\Users\achma\Documents\tugas pbo t2\pertemuan4-backend> 