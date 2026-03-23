# [ESP32](../readme.md)

## Home Assistant

### IP de Secours

```yaml
wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  ap:
    ssid: "ESP32-Secours"
    password: "12345678"
```

### Usage du rs485

Ajouter l'UART :

```yaml
uart:
  id: bus_rs485
  tx_pin: GPIO17
  rx_pin: GPIO16
  baud_rate: 9600
```

Modules RS485MAX485

```yaml
modbus:
  id: modbus1
  uart_id: bus_rs485
```

### Programmation bouton et led

```yaml
# ===== SORTIE RELAIS =====
switch:
  - platform: gpio
    pin: GPIO27
    id: relais_lampe
    name: "Lampe Bureau"
    restore_mode: RESTORE_DEFAULT_OFF

# ===== BOUTON PHYSIQUE =====
binary_sensor:
  - platform: gpio
    pin:
      number: GPIO14
      mode: INPUT_PULLUP
      inverted: true
    name: "Bouton Bureau"
    on_press:
      - switch.toggle: relais_lampe
```
