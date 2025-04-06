# [Controlleur principal](readme.md)

## Description

Pour la partie RS485 :

    1. Utilise un convertisseur USB→RS485 (CH340 + MAX485 ou équivalent)
    1. Intègre dans Home Assistant via un custom component, ou un script Python/MQTT bridge

Pour la partie Wi-Fi :

    1. Intègre chaque ESP32 Wi-Fi avec ESPHome, MQTT, ou API REST

## Equipements

| Désignation | Référence | quantité |
| :-- | :-- | --: |
| Raspsberry Pi | pi4 | 1 |
| Coffret compatible rail DIN | Coffret | 1 |
| Convertisseur USB->RS485 | convertisseur | 1 |
| Resistance 120Ohm  | resistance | 2 |

## Boitiers

* [Boitier](https://www.amazon.fr/R%C3%A9cipient-Plastique-Embedded-Raspberry-Fixation/dp/B095K3FJKS/ref=sr_1_6?dib=eyJ2IjoiMSJ9.xi78LPqTc36On_owLOUDgtfRILU_WMsoz1WYRgEfMj5blP5OSwIs0_zyLvHqmxKjylLdJHETyCwePwAF8f33YkhEIsUHO_79m0IM-hz7LaxITTb0J0c5Mc9l_RGQXnY2bQUOa4iKMataIBROk_P8RFt8Mt4z_eoMLUaJUlEMshZkCnq_mSxYf2OwHh6WUPIvnIIX8EX-vDly1IqrGmTLNth-_YHlTq9_Kk13Pv1dgW5TMIAVmGfFOxlkZfZ8glZwEsiVIqhhbxRFgSBfU0pChd0ZLuT3HaJQzLe7i1h22TQ.wnybZRrg9ROnQtqgwXihft80CnQbGguP_7EEK8Zx13E&dib_tag=se&keywords=ITALTRONIC&qid=1743919763&sr=8-6)
* [Boitier](https://www.amazon.fr/R%C3%A9cipient-Plastique-Embedded-Raspberry-Fixation/dp/B095K2L92T/ref=sr_1_7?dib=eyJ2IjoiMSJ9.xi78LPqTc36On_owLOUDgtfRILU_WMsoz1WYRgEfMj5blP5OSwIs0_zyLvHqmxKjylLdJHETyCwePwAF8f33YkhEIsUHO_79m0IM-hz7LaxITTb0J0c5Mc9l_RGQXnY2bQUOa4iKMataIBROk_P8RFt8Mt4z_eoMLUaJUlEMshZkCnq_mSxYf2OwHh6WUPIvnIIX8EX-vDly1IqrGmTLNth-_YHlTq9_Kk13Pv1dgW5TMIAVmGfFOxlkZfZ8glZwEsiVIqhhbxRFgSBfU0pChd0ZLuT3HaJQzLe7i1h22TQ.wnybZRrg9ROnQtqgwXihft80CnQbGguP_7EEK8Zx13E&dib_tag=se&keywords=ITALTRONIC&qid=1743919763&sr=8-7)
* [Boitier](https://www.amazon.fr/R%C3%A9cipient-Plastique-Embedded-Raspberry-Fixation/dp/B07W4L4V38/ref=sr_1_8?dib=eyJ2IjoiMSJ9.xi78LPqTc36On_owLOUDgtfRILU_WMsoz1WYRgEfMj5blP5OSwIs0_zyLvHqmxKjylLdJHETyCwePwAF8f33YkhEIsUHO_79m0IM-hz7LaxITTb0J0c5Mc9l_RGQXnY2bQUOa4iKMataIBROk_P8RFt8Mt4z_eoMLUaJUlEMshZkCnq_mSxYf2OwHh6WUPIvnIIX8EX-vDly1IqrGmTLNth-_YHlTq9_Kk13Pv1dgW5TMIAVmGfFOxlkZfZ8glZwEsiVIqhhbxRFgSBfU0pChd0ZLuT3HaJQzLe7i1h22TQ.wnybZRrg9ROnQtqgwXihft80CnQbGguP_7EEK8Zx13E&dib_tag=se&keywords=ITALTRONIC&qid=1743919763&sr=8-8)
* [Boitier](https://www.amazon.fr/Italtronic-33-0614000-RP4-COMPACT-RASPBERRY-MODEL/dp/B095K524PR/ref=sr_1_14?dib=eyJ2IjoiMSJ9.xi78LPqTc36On_owLOUDgtfRILU_WMsoz1WYRgEfMj5blP5OSwIs0_zyLvHqmxKjylLdJHETyCwePwAF8f33YkhEIsUHO_79m0IM-hz7LaxITTb0J0c5Mc9l_RGQXnY2bQUOa4iKMataIBROk_P8RFt8Mt4z_eoMLUaJUlEMshZkCnq_mSxYf2OwHh6WUPIvnIIX8EX-vDly1IqrGmTLNth-_YHlTq9_Kk13Pv1dgW5TMIAVmGfFOxlkZfZ8glZwEsiVIqhhbxRFgSBfU0pChd0ZLuT3HaJQzLe7i1h22TQ.wnybZRrg9ROnQtqgwXihft80CnQbGguP_7EEK8Zx13E&dib_tag=se&keywords=ITALTRONIC&qid=1743919763&sr=8-14)
* [Boitier](https://www.amazon.fr/35-0612000-BL-Bo%C3%AEtier-pour-rail-90mm/dp/B0CJSP33LP/ref=sr_1_252?dib=eyJ2IjoiMSJ9.f4ijeubyiMIxqtzAqpy3XwGM7N-SYgrXx8uZODzPuzKS3pL-Rplj8kgFf8kAmMCz9bAthlW9fQ_mO6rLxHGXHhw0l_DeEIK5MvzdOelrYTZh_IirGMcaaxJt_32rfgoF6XQ2g2o93moJOiqKgy3EnOTNLh0svvleBJ7hzs59iX42RtQ8oy7jHreQsx-k6AFcOW6bwn_1U5PNdHFIh4hegj-bpXN6SNOmcDGgCSDTil2XYU-b4uiTyl85h3CpnYuNf7qPH8tnEjuqxRmViJTuIbgnJfyEyR2SS56bfeqUwm0.g-uP_Lh1ECNhZ4cFpERlThf1udwflcP08o4bLZxAmew&dib_tag=se&keywords=ITALTRONIC&qid=1743921705&sr=8-252&xpid=2Snw12TGMssng)