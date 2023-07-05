# Changelog

## [2.26.0](https://github.com/micronutrientsupport/api/compare/v2.25.0...v2.26.0) (2023-07-05)


### Features

* add initial login logout and register routes ([e359407](https://github.com/micronutrientsupport/api/commit/e359407c1e159aa236fbbb6595c63b3d6dbcd123))

## [2.25.0](https://github.com/micronutrientsupport/api/compare/v2.24.1...v2.25.0) (2023-06-28)


### Features

* add jsonlogic formulae generation to susu and recurring costs endpoints ([4aad9db](https://github.com/micronutrientsupport/api/commit/4aad9dbf1d7662ada78c99d315adca6e0d0b0dd2))

## [2.24.1](https://github.com/micronutrientsupport/api/compare/v2.24.0...v2.24.1) (2023-06-20)


### Bug Fixes

* fix jsonlogic extradata substitution ([78ef69c](https://github.com/micronutrientsupport/api/commit/78ef69c985f111c5b5ddda535944b929c3ba057d))

## [2.24.0](https://github.com/micronutrientsupport/api/compare/v2.23.0...v2.24.0) (2023-06-16)


### Features

* return JSONLogic for industry_info ([26a4d5a](https://github.com/micronutrientsupport/api/commit/26a4d5ae1faeff3a162a53aa7810f2f59a43a4bc))
* update industry info and monitoring info to do json logic and pass missing data as literals ([aca673a](https://github.com/micronutrientsupport/api/commit/aca673a3cadb417fb8d5ba0385b939157a7ce659))

## [2.23.0](https://github.com/micronutrientsupport/api/compare/v2.22.0...v2.23.0) (2023-06-15)


### Features

* update create intervention function to accept the new params ([523ffdc](https://github.com/micronutrientsupport/api/commit/523ffdccace0e5a9b0acaf00668a1950aeca65e5))

## [2.22.0](https://github.com/micronutrientsupport/api/compare/v2.21.1...v2.22.0) (2023-06-13)


### Features

* add rowFormula to industryInfo endpoint ([d8ba2d0](https://github.com/micronutrientsupport/api/commit/d8ba2d01ecffd3a2ff8cb1c1b8843a5794908cf8))

## [2.21.1](https://github.com/micronutrientsupport/api/compare/v2.21.0...v2.21.1) (2023-06-07)


### Bug Fixes

* always display name and id for country endpoint ([ac8b2c7](https://github.com/micronutrientsupport/api/commit/ac8b2c79d27f67f6c15b687543f5934eee3a71ae))
* always display name, country id for regions endpoint ([d922318](https://github.com/micronutrientsupport/api/commit/d9223185d602c346aefb0a3d30f9fa754c5fefe4))

## [2.21.0](https://github.com/micronutrientsupport/api/compare/v2.20.0...v2.21.0) (2023-06-07)


### Features

* add basic output of jsonlogic for inteverntion industryinformation fields from db ([9b67861](https://github.com/micronutrientsupport/api/commit/9b67861a3b78ea07245b834600c5b9ca5a0f2389))
* add flag to disable GeoJSON for country endpoint and add subregions endpoint ([c94f2f5](https://github.com/micronutrientsupport/api/commit/c94f2f57b59e988f41b090ef50e200c0fb3db7d7))


### Bug Fixes

* add patch-package to dev dependencies ([73a5023](https://github.com/micronutrientsupport/api/commit/73a502347fed2399f41bfa4fb16218abf146b195))


### Miscellaneous

* actually add the patches: ([1d1be07](https://github.com/micronutrientsupport/api/commit/1d1be07df867260d6b5d0a29a327062d7ab7d45c))
* add pathces to dockerfile build ([d4ff2f4](https://github.com/micronutrientsupport/api/commit/d4ff2f4d3d11c289ff0a860ba3bac0fd1b911078))
* tidy up loggin ([9e3155b](https://github.com/micronutrientsupport/api/commit/9e3155b73b649ed8b00f831689339a86a6bcf907))

## [2.20.0](https://github.com/micronutrientsupport/api/compare/v2.19.4...v2.20.0) (2023-05-17)


### Features

* update routes to return national median figures in impact summary endpoint ([ce305b5](https://github.com/micronutrientsupport/api/commit/ce305b5bc7a708699f35c8ecaaab4193264b99ba))

## [2.19.4](https://github.com/micronutrientsupport/api/compare/v2.19.3...v2.19.4) (2023-02-14)


### Bug Fixes

* add missing fields to intervention list endpoint ([6e9766c](https://github.com/micronutrientsupport/api/commit/6e9766c2a12c71e2bd0fb927bfba192123a8f4df))
* add parent intervention to intervention list ([6a050fb](https://github.com/micronutrientsupport/api/commit/6a050fb7abaab4b39c9bf6805be6d2d4ed4aaa7f))

## [2.19.3](https://github.com/micronutrientsupport/api/compare/v2.19.2...v2.19.3) (2023-02-03)


### Bug Fixes

* try to explicitly set cors headers for intervention pathc request ([fd35014](https://github.com/micronutrientsupport/api/commit/fd35014fef0468f30d913a781821fe034314a4ab))

## [2.19.2](https://github.com/micronutrientsupport/api/compare/v2.19.1...v2.19.2) (2022-11-23)


### Bug Fixes

* trigger release update ([a43b1f4](https://github.com/micronutrientsupport/api/commit/a43b1f45d6d7b429259abc48278e597f027ba0d3))


### Miscellaneous

* fix release please config 3 ([c3af8b5](https://github.com/micronutrientsupport/api/commit/c3af8b50f961f3e10650b69df3286d2a2de87845))
* fix release please config 4 ([79445ae](https://github.com/micronutrientsupport/api/commit/79445aea29bf9d9f0037011caf5f7fe0d5432636))
* fix release please config 5 ([f035147](https://github.com/micronutrientsupport/api/commit/f035147dbd14973a5ef427fd974d543b5a9fad96))

## [2.19.1](https://github.com/micronutrientsupport/api/compare/v2.19.0...v2.19.1) (2022-11-23)


### Bug Fixes

* update recporting of API version ([780da15](https://github.com/micronutrientsupport/api/commit/780da1527f7633a57207688e53db2de1c4c2bf87))


### Miscellaneous

* bump release please version to support extra-files ([f97665e](https://github.com/micronutrientsupport/api/commit/f97665ec26e1e9427de4d7dc2709b1fd7e415e95))
* fix GA typo ([6b6f412](https://github.com/micronutrientsupport/api/commit/6b6f412080d95d67b79c86b364fba5c684dabfab))
* fix release please config ([a743d27](https://github.com/micronutrientsupport/api/commit/a743d273bce9d6fe23ca30b3c625cfffe694a4c2))
* fix release please config 2 ([6d9a7e8](https://github.com/micronutrientsupport/api/commit/6d9a7e852a94982c404ffb8daecfae28a425d295))

## [2.19.0](https://www.github.com/micronutrientsupport/api/compare/v2.18.1...v2.19.0) (2022-11-23)


### Features

* add endpoint to expose API and data version numbers ([e8f189a](https://www.github.com/micronutrientsupport/api/commit/e8f189a8076db567dff125692d519d4fa0fe39dd))

### [2.18.1](https://www.github.com/micronutrientsupport/api/compare/v2.18.0...v2.18.1) (2022-08-17)


### Bug Fixes

* update unmatched items endpoint to use the fct hierarchy views ([f357cf7](https://www.github.com/micronutrientsupport/api/commit/f357cf73f7c452d549e9a5db0459872c7848193f))

## [2.18.0](https://www.github.com/micronutrientsupport/api/compare/v2.17.0...v2.18.0) (2022-07-21)


### Features

* return data value from intervention patch route ([49fdb7e](https://www.github.com/micronutrientsupport/api/commit/49fdb7e9bcb307c35d270115f5cf85c406d93e43))

## [2.17.0](https://www.github.com/micronutrientsupport/api/compare/v2.16.1...v2.17.0) (2022-07-20)


### Features

* add routes to expose updated match statistics routes ([f857587](https://www.github.com/micronutrientsupport/api/commit/f8575870b5f8fee6fe13df5460e4425e95c9d1ee))


### Bug Fixes

* adjust inputs for household baseline routes ([4771bec](https://www.github.com/micronutrientsupport/api/commit/4771bec43cd94c0c6d204000dce9312dbe91ec09))

### [2.16.1](https://www.github.com/micronutrientsupport/api/compare/v2.16.0...v2.16.1) (2022-06-28)


### Bug Fixes

* fix reference to new intervention fn: ([85e15c9](https://www.github.com/micronutrientsupport/api/commit/85e15c995a4d835dc6bd2cd4078f6995a65dedfb))

## [2.16.0](https://www.github.com/micronutrientsupport/api/compare/v2.15.1...v2.16.0) (2022-06-28)


### Features

* add intervention name and description to create derived intervention call ([0a160e9](https://www.github.com/micronutrientsupport/api/commit/0a160e9f6a1cb5483d8d62196a3b0a26253a9d79))


### Miscellaneous

* update all models to use env var schema ([8243b91](https://www.github.com/micronutrientsupport/api/commit/8243b91ea4eb3f315bdd88d2f6d9d8a7a4e31658))

### [2.15.1](https://www.github.com/micronutrientsupport/api/compare/v2.15.0...v2.15.1) (2022-05-03)


### Bug Fixes

* update models/repositories for micronutrient endpoint to look at new view rather than source table ([0d7de58](https://www.github.com/micronutrientsupport/api/commit/0d7de5881dbaec400b5cccefeaeece053da6045d))

## [2.15.0](https://www.github.com/micronutrientsupport/api/compare/v2.14.2...v2.15.0) (2022-03-23)


### Features

* **intervention:** add summary costs endpoint ([f84dde6](https://www.github.com/micronutrientsupport/api/commit/f84dde679a152b4b981fb060d64e1f3211d784d8))

### [2.14.2](https://www.github.com/micronutrientsupport/api/compare/v2.14.1...v2.14.2) (2022-01-19)


### Miscellaneous

* fix schema for intervention routes ([acee769](https://www.github.com/micronutrientsupport/api/commit/acee7696b656334a91040c46c8e2674fbc67f788))

### [2.14.1](https://www.github.com/micronutrientsupport/api/compare/v2.14.0...v2.14.1) (2022-01-18)


### Bug Fixes

* update intervention responses to use standard JSON format ([9b55882](https://www.github.com/micronutrientsupport/api/commit/9b55882c1ade2162940942c271dfe5be27e0aa04))

## [2.14.0](https://www.github.com/micronutrientsupport/api/compare/v2.13.0...v2.14.0) (2022-01-13)


### Features

* add route to create derived intervention ([5f5edcc](https://www.github.com/micronutrientsupport/api/commit/5f5edccb3578f91cebd433ebbd8891e556a83ca2))

## [2.13.0](https://www.github.com/micronutrientsupport/api/compare/v2.12.0...v2.13.0) (2022-01-13)


### Features

* **intervention:** add initial routes for accessing and updating intervention data ([678ba24](https://www.github.com/micronutrientsupport/api/commit/678ba24a1a7952edd10c0771e925baeded086e8d))

## [2.12.0](https://www.github.com/micronutrientsupport/api/compare/v2.11.5...v2.12.0) (2021-11-24)


### Features

* add bin ranges for map views ([7ad663c](https://www.github.com/micronutrientsupport/api/commit/7ad663c69a969cb689d3fed0dbe4f2822473b82f))


### Miscellaneous

* add extra debug info to redis connection ([ca8aea8](https://www.github.com/micronutrientsupport/api/commit/ca8aea8cbcd4749c627ab66baa23cd0642e600c7))
* release 2.11.6 ([660fc46](https://www.github.com/micronutrientsupport/api/commit/660fc46e03e049edfe2c339119a119e2c52e6c72))

### [2.11.6](https://www.github.com/micronutrientsupport/api/compare/v2.11.5...v2.11.6) (2021-11-23)


### Miscellaneous

* add extra debug info to redis connection ([c05bb06](https://www.github.com/micronutrientsupport/api/commit/c05bb066eefb9b3ea9ba84a5cf04bb9b15f6bfcf))

### [2.11.5](https://www.github.com/micronutrientsupport/api/compare/v2.11.4...v2.11.5) (2021-11-19)


### Miscellaneous

* fix function call params 4 ([8a64f56](https://www.github.com/micronutrientsupport/api/commit/8a64f56775173403b64de42294692cf6680df892))

### [2.11.4](https://www.github.com/micronutrientsupport/api/compare/v2.11.3...v2.11.4) (2021-11-19)


### Miscellaneous

* fix function call params 2 ([c593477](https://www.github.com/micronutrientsupport/api/commit/c593477b6b33e2021c2d0282d9af9a9540146ce3))

### [2.11.3](https://www.github.com/micronutrientsupport/api/compare/v2.11.2...v2.11.3) (2021-11-19)


### Miscellaneous

* fix function call params ([376093e](https://www.github.com/micronutrientsupport/api/commit/376093eb708655ec9075a081b75af220f1ab3c7d))

### [2.11.2](https://www.github.com/micronutrientsupport/api/compare/v2.11.1...v2.11.2) (2021-11-16)


### Bug Fixes

* fix openapi generator enhancer ([55f94fc](https://www.github.com/micronutrientsupport/api/commit/55f94fc202f6979aef736d4e7eb95cf2badf5671))

### [2.11.1](https://www.github.com/micronutrientsupport/api/compare/v2.11.0...v2.11.1) (2021-11-16)


### Miscellaneous

* bump docker node version ([0d5b64e](https://www.github.com/micronutrientsupport/api/commit/0d5b64e8916e7466dbcffd3cfb574681ab462ccb))

## [2.11.0](https://www.github.com/micronutrientsupport/api/compare/v2.10.0...v2.11.0) (2021-11-16)


### Features

* add github api datasource and job queue to service requests for feedback endpoint ([794c1b8](https://www.github.com/micronutrientsupport/api/commit/794c1b82b5e1a20536daadf02c0468ad4ec3b934))


### Bug Fixes

* fix slug for homepage, resize images for transfer size, boost supported request size ([805d542](https://www.github.com/micronutrientsupport/api/commit/805d542e1a0698eaa770394bf988df6214a848a8))

## [2.10.0](https://www.github.com/micronutrientsupport/api/compare/v2.9.3...v2.10.0) (2021-10-29)


### Features

* add endpoints for unmatched food consumption data ([5c4697c](https://www.github.com/micronutrientsupport/api/commit/5c4697c8b65b1df7ef075589678d613d00091c10))

### [2.9.3](https://www.github.com/micronutrientsupport/api/compare/v2.9.2...v2.9.3) (2021-10-19)


### Bug Fixes

* ensure database responses to native sql queries are hydrated into loopback models ([a093656](https://www.github.com/micronutrientsupport/api/commit/a09365615faba845c70c1fc69e0007c49956e2e0))

### [2.9.2](https://www.github.com/micronutrientsupport/api/compare/v2.9.1...v2.9.2) (2021-10-19)


### Bug Fixes

* sort sql param numbering ([081cfef](https://www.github.com/micronutrientsupport/api/commit/081cfef3845cbc86ff0cc827160600f69ced342b))

### [2.9.1](https://www.github.com/micronutrientsupport/api/compare/v2.9.0...v2.9.1) (2021-10-19)


### Bug Fixes

* fix mismatch of scenario schemas ([c57b857](https://www.github.com/micronutrientsupport/api/commit/c57b857aa12e9aabd054a20a53526121d9ebee5f))

## [2.9.0](https://www.github.com/micronutrientsupport/api/compare/v2.8.1...v2.9.0) (2021-10-14)


### Features

* add consumption endpoint for scenarios ([8722577](https://www.github.com/micronutrientsupport/api/commit/872257788c5a5a96818adcac33bbe8a85d461779))


### Miscellaneous

* tidy up model fields ([6b2dfce](https://www.github.com/micronutrientsupport/api/commit/6b2dfceca51a49082ca22326765def17e250ecb9))

### [2.8.1](https://www.github.com/micronutrientsupport/api/compare/v2.8.0...v2.8.1) (2021-10-14)


### Bug Fixes

* add food_group_name field to monthly food endpoint ([bc97f46](https://www.github.com/micronutrientsupport/api/commit/bc97f46500567f999ad07ea44cdcf59684471881))

## [2.8.0](https://www.github.com/micronutrientsupport/api/compare/v2.7.0...v2.8.0) (2021-10-14)


### Features

* add endpoints for country level dietary change scenarios ([6f124dd](https://www.github.com/micronutrientsupport/api/commit/6f124dd9cb47891e35d781dbcfae1a7e0b15380f))

## [2.7.0](https://www.github.com/micronutrientsupport/api/compare/v2.6.0...v2.7.0) (2021-10-12)


### Features

* add default flag to age-gender model ([f958b01](https://www.github.com/micronutrientsupport/api/commit/f958b012a073ffee2205a4f04296c02ed771b31a))

## [2.6.0](https://www.github.com/micronutrientsupport/api/compare/v2.5.0...v2.6.0) (2021-10-12)


### Features

* add food_group details to top 20 food item models ([3f088a8](https://www.github.com/micronutrientsupport/api/commit/3f088a8cc41a4478a772c1e007153ea7147e1c78))

## [2.5.0](https://www.github.com/micronutrientsupport/api/compare/v2.4.3...v2.5.0) (2021-10-10)


### Features

* major rehaul and consolidation of routes and return values ([a40b6ee](https://www.github.com/micronutrientsupport/api/commit/a40b6eebcf99df526b7618b962c5d47f9f524e39))

### [2.4.3](https://www.github.com/micronutrientsupport/api/compare/v2.4.2...v2.4.3) (2021-09-09)


### Bug Fixes

* sort geojson response for country deficiency ([09d234e](https://www.github.com/micronutrientsupport/api/commit/09d234e21513d6f768b53ac562d873dac179c37e))

### [2.4.2](https://www.github.com/micronutrientsupport/api/compare/v2.4.1...v2.4.2) (2021-09-09)


### Bug Fixes

* fix ids in countrydeficiencyAfe model: ([2109a25](https://www.github.com/micronutrientsupport/api/commit/2109a255f28f829c32263d03e31c10909374002b))

### [2.4.1](https://www.github.com/micronutrientsupport/api/compare/v2.4.0...v2.4.1) (2021-09-09)


### Bug Fixes

* use the correct models/repositories for country deficiency ([ffed05e](https://www.github.com/micronutrientsupport/api/commit/ffed05e1938152fc20b9ee922bdd89aeff555c02))

## [2.4.0](https://www.github.com/micronutrientsupport/api/compare/v2.3.0...v2.4.0) (2021-09-08)


### Features

* add age-gender groupId to the biomarker data sources endpoint ([8ae3140](https://www.github.com/micronutrientsupport/api/commit/8ae3140ec29649ddf4e5ca2159408bcd16ad84de))

## [2.3.0](https://www.github.com/micronutrientsupport/api/compare/v2.2.0...v2.3.0) (2021-09-08)


### Features

* add biomarker age gender group endpoint ([1d60e64](https://www.github.com/micronutrientsupport/api/commit/1d60e6428ebbb871d67c4f1ba873237e25d6df3b))

## [2.2.0](https://www.github.com/micronutrientsupport/api/compare/v2.1.1...v2.2.0) (2021-09-07)


### Features

* add geojson to countries dictionary.  Update data sources to add data info ([ccdf5a0](https://www.github.com/micronutrientsupport/api/commit/ccdf5a064e36ea50e2579d1c605be45f74df5eab))


### Bug Fixes

* add ids to countryintake model ([252c2a0](https://www.github.com/micronutrientsupport/api/commit/252c2a0c8ba6f90992f31e7de7fc053e8aca8716))

### [2.1.1](https://www.github.com/micronutrientsupport/api/compare/v2.1.0...v2.1.1) (2021-09-02)


### Bug Fixes

* set schema in dapperdox enhancer ([0af0748](https://www.github.com/micronutrientsupport/api/commit/0af07488ccd2f01bc433cefae924067ccae456dc))

## [2.1.0](https://www.github.com/micronutrientsupport/api/compare/v2.0.1...v2.1.0) (2021-09-02)


### Features

* Add view for biomarker data sources: ([24bcacd](https://www.github.com/micronutrientsupport/api/commit/24bcacd7ade2fa275a9e6f8c382a8ebf3d1b29bc))
* fix afe household views, geojson responses ([18e2701](https://www.github.com/micronutrientsupport/api/commit/18e27017aa55fa61c8f3b5e27f33ffa4bf8cd3b9))
* refactor top20 food routes ([bb97841](https://www.github.com/micronutrientsupport/api/commit/bb978416772b0c1c24985c2f22d933ddbe304079))


### Bug Fixes

* consolidation and docs updates ([9269a85](https://www.github.com/micronutrientsupport/api/commit/9269a854d9ca0817c96b6175d880349bac4ff2fc))


### Miscellaneous

* fix imports ([e864608](https://www.github.com/micronutrientsupport/api/commit/e864608d31de034be1e602fea66c09da3a7785d4))
* update schema ref ([412c45e](https://www.github.com/micronutrientsupport/api/commit/412c45e1238f009e19b26d7fb1737d910de5a9a1))

### [2.0.1](https://www.github.com/micronutrientsupport/api/compare/v2.0.0...v2.0.1) (2021-08-25)


### Bug Fixes

* ensure openapi spec specifies https ([8fa4ca0](https://www.github.com/micronutrientsupport/api/commit/8fa4ca0bd0a62370ba3c14746dc808752b12dea6))
* fix urls for swagger ui ([3b88229](https://www.github.com/micronutrientsupport/api/commit/3b88229f961029a86ab39174354747b35296eae6))

## [2.0.0](https://www.github.com/micronutrientsupport/api/compare/v1.10.0...v2.0.0) (2021-08-20)


### ⚠ BREAKING CHANGES

* bump semvar version

### Miscellaneous

* bump semvar version ([856ee6d](https://www.github.com/micronutrientsupport/api/commit/856ee6d0408256ea93c366c86db1f2e4bd56882b))
* merge develop ([e9ae787](https://www.github.com/micronutrientsupport/api/commit/e9ae787df744f5169e47f75a06f018239448fa3c))

## [1.10.0](https://www.github.com/micronutrientsupport/api/compare/v1.9.0...v1.10.0) (2021-07-12)


### Features

* fix ish4 routes ([166ced7](https://www.github.com/micronutrientsupport/api/commit/166ced7ad6bb8358fb624851f98aa3a35c79712c))

## [1.9.0](https://www.github.com/micronutrientsupport/api/compare/v1.8.0...v1.9.0) (2021-06-09)


### Features

* make scenario response more like baseline response ([1d29497](https://www.github.com/micronutrientsupport/api/commit/1d29497c7f82d86a28605c7b185a5b20a4b7db8d))
* update scenario to return geoJSON ([82e2e6e](https://www.github.com/micronutrientsupport/api/commit/82e2e6e64b6c912c2a179f9466bc84cec7ca00fd))

## [1.8.0](https://www.github.com/micronutrientsupport/api/compare/v1.7.1...v1.8.0) (2021-06-09)


### Features

* Add initial routes for simple dietary change (composition) scenarios ([7331252](https://www.github.com/micronutrientsupport/api/commit/733125295495ed9fd1bb4ac9856faaa6b52f96bb))


### Miscellaneous

* fix merge conflicts in index.ts files ([cd0b949](https://www.github.com/micronutrientsupport/api/commit/cd0b9490a956e10a289560fadf2492e333657173))

### [1.7.1](https://www.github.com/micronutrientsupport/api/compare/v1.7.0...v1.7.1) (2021-05-19)


### Miscellaneous

* switch header from cache-control to surrogate-control ([a19f12a](https://www.github.com/micronutrientsupport/api/commit/a19f12a5c54d301f2e53745d0b7b27053ad10d56))

## [1.7.0](https://www.github.com/micronutrientsupport/api/compare/v1.6.7...v1.7.0) (2021-05-18)


### Features

* **cache:** Add decorator to set cache expire header on endpoints ([ef53b61](https://www.github.com/micronutrientsupport/api/commit/ef53b6109f5849cca424990e4e5d823779f4be9e))

### [1.6.7](https://www.github.com/micronutrientsupport/api/compare/v1.6.6...v1.6.7) (2021-05-05)


### Miscellaneous

* README update ([d37be20](https://www.github.com/micronutrientsupport/api/commit/d37be2072e960a210b5cb4e92bc78fc7b68a51ff))

### [1.6.6](https://www.github.com/micronutrientsupport/api/compare/v1.6.5...v1.6.6) (2021-05-05)


### Miscellaneous

* README updates ([f925491](https://www.github.com/micronutrientsupport/api/commit/f9254910d87c66a4751085aa3f036bb502e24ef2))

### [1.6.5](https://www.github.com/micronutrientsupport/api/compare/v1.6.4...v1.6.5) (2021-05-05)


### Miscellaneous

* Update readme links ([902f9ef](https://www.github.com/micronutrientsupport/api/commit/902f9ef924ab078e86738a6ae4713ae8347629d7))

### [1.6.4](https://www.github.com/micronutrientsupport/api/compare/v1.6.3...v1.6.4) (2021-05-05)


### Miscellaneous

* README tweaks ([7249f8a](https://www.github.com/micronutrientsupport/api/commit/7249f8aac1cfd6a21ff408a39bc97284b2790657))

### [1.6.3](https://www.github.com/micronutrientsupport/api/compare/v1.6.2...v1.6.3) (2021-05-05)


### Miscellaneous

* update README header ([8d86af4](https://www.github.com/micronutrientsupport/api/commit/8d86af4302e251d04c6fb3bc6a383d06eb5dfee5))

### [1.6.2](https://www.github.com/micronutrientsupport/api/compare/v1.6.1...v1.6.2) (2021-05-05)


### Miscellaneous

* update README ([a3528b4](https://www.github.com/micronutrientsupport/api/commit/a3528b4d50f11b836197fa9addabbc1d4bcf3709))

### [1.6.1](https://www.github.com/micronutrientsupport/api/compare/v1.6.0...v1.6.1) (2021-05-05)


### Miscellaneous

* update readme ([748e843](https://www.github.com/micronutrientsupport/api/commit/748e843b691436f9c0a404879a034a8ea97ae438))

## [1.6.0](https://www.github.com/micronutrientsupport/api/compare/v1.5.0...v1.6.0) (2021-05-05)


### Features

* Readme ([96db759](https://www.github.com/micronutrientsupport/api/commit/96db759ac88ff1b701c433003683b0dc7d2afae8))

## [1.5.0](https://www.github.com/micronutrientsupport/api/compare/v1.4.30...v1.5.0) (2021-03-25)


### Features

* working CI deploy ([6a19b93](https://www.github.com/micronutrientsupport/api/commit/6a19b935503ec640f65d3adb51a48c25c21677aa))

### [1.4.30](https://www.github.com/micronutrientsupport/api/compare/v1.4.29...v1.4.30) (2021-03-25)


### Miscellaneous

* CI ([c33b93c](https://www.github.com/micronutrientsupport/api/commit/c33b93c3da8db716a7846e3583de4b9715568131))

### [1.4.29](https://www.github.com/micronutrientsupport/api/compare/v1.4.28...v1.4.29) (2021-03-25)


### Miscellaneous

* CI ([67e0866](https://www.github.com/micronutrientsupport/api/commit/67e0866d96b155fb13cb61512cf878d5b26e674f))

### [1.4.28](https://www.github.com/micronutrientsupport/api/compare/v1.4.27...v1.4.28) (2021-03-25)


### Miscellaneous

* CI ([baa7d77](https://www.github.com/micronutrientsupport/api/commit/baa7d77e2465cf75ca88503a0da2b900c1cbd4b0))

### [1.4.27](https://www.github.com/micronutrientsupport/api/compare/v1.4.26...v1.4.27) (2021-03-25)


### Miscellaneous

* CI ([8109a27](https://www.github.com/micronutrientsupport/api/commit/8109a273d4a01ab3caa8d59c141a4f3c797a5a4b))

### [1.4.26](https://www.github.com/micronutrientsupport/api/compare/v1.4.25...v1.4.26) (2021-03-25)


### Miscellaneous

* CI file name ([d53e2a9](https://www.github.com/micronutrientsupport/api/commit/d53e2a9ac26a92f32d27b95a0c6c0b2b045ed62f))

### [1.4.25](https://www.github.com/micronutrientsupport/api/compare/v1.4.24...v1.4.25) (2021-03-25)


### Miscellaneous

* add CI automerge ([7dc1fc7](https://www.github.com/micronutrientsupport/api/commit/7dc1fc73d38be2309e5f7263a32cb72cb5a3c7d5))

### [1.4.24](https://www.github.com/micronutrientsupport/api/compare/v1.4.23...v1.4.24) (2021-03-25)


### Miscellaneous

* another change ([7dc31c6](https://www.github.com/micronutrientsupport/api/commit/7dc31c62fb96bc7e43f106023e1b31404144db6f))

### [1.4.23](https://www.github.com/micronutrientsupport/api/compare/v1.4.22...v1.4.23) (2021-03-25)


### Miscellaneous

* CI ([512425b](https://www.github.com/micronutrientsupport/api/commit/512425b7cc258c2307924e661a0db9813ea08d4f))

### [1.4.22](https://www.github.com/micronutrientsupport/api/compare/v1.4.21...v1.4.22) (2021-03-25)


### Miscellaneous

* CI ([4a9470a](https://www.github.com/micronutrientsupport/api/commit/4a9470a88a6391b28acb341c5e281e9e02993fa8))

### [1.4.21](https://www.github.com/micronutrientsupport/api/compare/v1.4.20...v1.4.21) (2021-03-25)


### Miscellaneous

* ci ([4a8ba8a](https://www.github.com/micronutrientsupport/api/commit/4a8ba8acac528cc2d15db5330debffa6dde38117))

### [1.4.20](https://www.github.com/micronutrientsupport/api/compare/v1.4.19...v1.4.20) (2021-03-25)


### Miscellaneous

* ci ([afb1344](https://www.github.com/micronutrientsupport/api/commit/afb1344008194b248134b9e54a1bb631dc302518))

### [1.4.19](https://www.github.com/micronutrientsupport/api/compare/v1.4.18...v1.4.19) (2021-03-25)


### Miscellaneous

* CI ([ceb8506](https://www.github.com/micronutrientsupport/api/commit/ceb85064f52125e656c4059e01e594bd257f491b))

### [1.4.18](https://www.github.com/micronutrientsupport/api/compare/v1.4.17...v1.4.18) (2021-03-25)


### Miscellaneous

* CI ([163fa84](https://www.github.com/micronutrientsupport/api/commit/163fa84154c226a9ab01470c31433458eca9531b))

### [1.4.17](https://www.github.com/micronutrientsupport/api/compare/v1.4.16...v1.4.17) (2021-03-25)


### Miscellaneous

* CI PR ([0b49764](https://www.github.com/micronutrientsupport/api/commit/0b49764a5a6db1e1857f309e5a1bafb01942c251))

### [1.4.16](https://www.github.com/micronutrientsupport/api/compare/v1.4.15...v1.4.16) (2021-03-25)


### Miscellaneous

* ci PR ([0451515](https://www.github.com/micronutrientsupport/api/commit/0451515c244dd9ec275ac6d592f9e9d2df06d486))

### [1.4.15](https://www.github.com/micronutrientsupport/api/compare/v1.4.14...v1.4.15) (2021-03-25)


### Miscellaneous

* CI auto PR ([1924a45](https://www.github.com/micronutrientsupport/api/commit/1924a452e53cc395614355b2044fbd8de84f380b))

### [1.4.14](https://www.github.com/micronutrientsupport/api/compare/v1.4.13...v1.4.14) (2021-03-25)


### Miscellaneous

* another change ([dbd8e59](https://www.github.com/micronutrientsupport/api/commit/dbd8e59fd1f0a7e5d21194c082b9f9f0ebfc302a))
* CI new ([c895c88](https://www.github.com/micronutrientsupport/api/commit/c895c885db21579e9c663e69687c4c509f757988))

### [1.4.13](https://www.github.com/micronutrientsupport/api/compare/v1.4.12...v1.4.13) (2021-03-25)


### Miscellaneous

* ci ([c930c35](https://www.github.com/micronutrientsupport/api/commit/c930c352977fe2e35a5874e7139864d79bfaa628))

### [1.4.12](https://www.github.com/micronutrientsupport/api/compare/v1.4.11...v1.4.12) (2021-03-25)


### Miscellaneous

* ci ([d3c1c72](https://www.github.com/micronutrientsupport/api/commit/d3c1c72bc6292af91407f82b0da001557e26b6ab))

### [1.4.11](https://www.github.com/micronutrientsupport/api/compare/v1.4.10...v1.4.11) (2021-03-25)


### Miscellaneous

* CI ([216da0d](https://www.github.com/micronutrientsupport/api/commit/216da0df4dad16163f6ea363f52e5bc4721e3373))

### [1.4.10](https://www.github.com/micronutrientsupport/api/compare/v1.4.9...v1.4.10) (2021-03-25)


### Miscellaneous

* CI ([a7ac602](https://www.github.com/micronutrientsupport/api/commit/a7ac60220ed35f2e4fe86c58cdd7fc76138c2ed9))

### [1.4.9](https://www.github.com/micronutrientsupport/api/compare/v1.4.8...v1.4.9) (2021-03-25)


### Miscellaneous

* CI tweak ([af5efc5](https://www.github.com/micronutrientsupport/api/commit/af5efc594e4e8b7c509aac573f52351aafeaa386))

### [1.4.8](https://www.github.com/micronutrientsupport/api/compare/v1.4.7...v1.4.8) (2021-03-25)


### Miscellaneous

* debug CI vars ([503fc96](https://www.github.com/micronutrientsupport/api/commit/503fc9646921395bd6a623a9479edda2765d3850))

### [1.4.7](https://www.github.com/micronutrientsupport/api/compare/v1.4.6...v1.4.7) (2021-03-25)


### Miscellaneous

* more CI ([3ac475d](https://www.github.com/micronutrientsupport/api/commit/3ac475db4544cd203b61ca06507428d20c126fa5))

### [1.4.6](https://www.github.com/micronutrientsupport/api/compare/v1.4.5...v1.4.6) (2021-03-25)


### Miscellaneous

* more ci tweaks ([797915d](https://www.github.com/micronutrientsupport/api/commit/797915dba44c98cfd51bd91f154bf7b12150bb09))

### [1.4.5](https://www.github.com/micronutrientsupport/api/compare/v1.4.4...v1.4.5) (2021-03-25)


### Miscellaneous

* ci ([083a433](https://www.github.com/micronutrientsupport/api/commit/083a43308b5f24789093ffd4cf9550cc126ffbcd))
* ci ([7889098](https://www.github.com/micronutrientsupport/api/commit/7889098d991b04692bdf86afe0954815fb0cf085))

### [1.4.4](https://www.github.com/micronutrientsupport/api/compare/v1.4.3...v1.4.4) (2021-03-25)


### Miscellaneous

* CI tweaks ([1573cd2](https://www.github.com/micronutrientsupport/api/commit/1573cd212c5fcc0ecd2fb2fafdf102e4ba8d5d5b))

### [1.4.3](https://www.github.com/micronutrientsupport/api/compare/v1.4.2...v1.4.3) (2021-03-25)


### Miscellaneous

* another change ([fe60d83](https://www.github.com/micronutrientsupport/api/commit/fe60d8394fb9a5badbbc3346b7ec0774fa91f264))
* update releasemain CI ([526fa3f](https://www.github.com/micronutrientsupport/api/commit/526fa3fedc7508a8d9ea52ef0e40db0db4b37472))

### [1.4.2](https://www.github.com/micronutrientsupport/api/compare/v1.4.1...v1.4.2) (2021-03-25)


### Miscellaneous

* another change ([5659dff](https://www.github.com/micronutrientsupport/api/commit/5659dff6f329c93e768e3a838f347c7929d161e1))

### [1.4.1](https://www.github.com/micronutrientsupport/api/compare/v1.4.0...v1.4.1) (2021-03-25)


### Bug Fixes

* update CI ([6eb0880](https://www.github.com/micronutrientsupport/api/commit/6eb0880ac5be53761d3b4d0250cd32d9b9e8b5bb))

## [1.4.0](https://www.github.com/micronutrientsupport/api/compare/v1.3.0...v1.4.0) (2021-03-25)


### Features

* another nother pointless change ([4ecd16c](https://www.github.com/micronutrientsupport/api/commit/4ecd16c36cff8af637a6281cb5ff759eca864fcb))

## [1.3.0](https://www.github.com/micronutrientsupport/api/compare/v1.2.0...v1.3.0) (2021-03-25)


### Features

* another pointless change ([2d64562](https://www.github.com/micronutrientsupport/api/commit/2d645625dd13fb8346559fa517c31073aa85c301))
* rename routes ([89802fd](https://www.github.com/micronutrientsupport/api/commit/89802fd5dcfd305386ac659af189a94528c48d44))

## [1.2.0](https://www.github.com/micronutrientsupport/api/compare/v1.1.0...v1.2.0) (2021-03-25)


### Features

* Move release-please to github actions ([d6f997b](https://www.github.com/micronutrientsupport/api/commit/d6f997bb21331541d2fe1ddff76ad3108f380743))
* pointless change ([05711fa](https://www.github.com/micronutrientsupport/api/commit/05711fa8ec2d5d52a479cb91f1da32ffb32794ed))


### Bug Fixes

* tidy ([33abc0c](https://www.github.com/micronutrientsupport/api/commit/33abc0c833c4bba8e2ac472c5a42f21fb4acd979))

## [1.1.0](https://www.github.com/micronutrientsupport/api/compare/v1.0.0...v1.1.0) (2021-03-25)


### Features

* better auto routes ([8f6355b](https://www.github.com/micronutrientsupport/api/commit/8f6355b49b1b17d04ed37ea03df6e522735eebd4))
* better auto routes 2 ([7d11197](https://www.github.com/micronutrientsupport/api/commit/7d111976a6c7aa3baf0e6dfa6d3b5c118e19fd57))


### Bug Fixes

* adjust autorelease ([44d3832](https://www.github.com/micronutrientsupport/api/commit/44d383206e9d1ed7bbf88810fa5a12bcb76748d2))
* adjust openapi tagging ([8ad4444](https://www.github.com/micronutrientsupport/api/commit/8ad444459cd28a253cf1947116e38a005d01294f))
* reduce console clutter ([ea325c3](https://www.github.com/micronutrientsupport/api/commit/ea325c363fcfe3939595adf9f3d9f263a463014f))

## 1.0.0 (2021-03-24)


### Features

* Add endpoint for impact food availability data ([b8cf2bb](https://www.github.com/micronutrientsupport/api/commit/b8cf2bba69c102747082b9380968f45f2cbc254c))
* add extra fields to impact scenario response ([8fcb0e8](https://www.github.com/micronutrientsupport/api/commit/8fcb0e877919ba592c53afb83bc944071769b9b2))
* Add route returning geoJSON fc for country level intake ([19a2752](https://www.github.com/micronutrientsupport/api/commit/19a2752774763a51af05982429b1dd3f670bbad5))
* add standard json response ([ce753b1](https://www.github.com/micronutrientsupport/api/commit/ce753b16af77a705e34af33d00a61471a3021508))
* add top 20 route for household level data ([7d0e495](https://www.github.com/micronutrientsupport/api/commit/7d0e49570e11b8013aea99792c2f3acd6b6d5e23))
* better openAPI tagging ([3de3599](https://www.github.com/micronutrientsupport/api/commit/3de35991ef38af1216fc3741b92d3aa297ca8c47))
* **opencpu:** add opencpu datasource and example string replacement route ([88a5e2d](https://www.github.com/micronutrientsupport/api/commit/88a5e2dc22886ee0773c6a041e6d77762c2368dd))
* Update openapi config to use correct url ([2de4a84](https://www.github.com/micronutrientsupport/api/commit/2de4a8434fd2a5d1d0165159fb632fc9eda311c9))
* Update openapi config to use correct url 2 ([6d9a5a4](https://www.github.com/micronutrientsupport/api/commit/6d9a5a48fb8f5373e44185f777064d781a933e95))


### Bug Fixes

* id fixes for geojson routes ([2dc3e72](https://www.github.com/micronutrientsupport/api/commit/2dc3e72f57d27ade640eabd095dd684582e37262))
* id fixes for geojson routes ([b479a00](https://www.github.com/micronutrientsupport/api/commit/b479a00f5c452b16b114f7a638e043bb8655a74f))
* Revert - Update openapi config to use correct url ([ddda882](https://www.github.com/micronutrientsupport/api/commit/ddda88233a3597b7a7371932c1285c9505ef9adc))
* update autorelease branch ([38298bf](https://www.github.com/micronutrientsupport/api/commit/38298bf00fe0630c3eca7a4fa2ecadc997d3a47d))
* Update country route to use GeoJSON view ([5232657](https://www.github.com/micronutrientsupport/api/commit/5232657f250189fd57beacd9616111eba8f5eff2))
* Update openapi config to use correct url ([4e96f43](https://www.github.com/micronutrientsupport/api/commit/4e96f434420fc4d7fc64597b522333043e286a3e))
