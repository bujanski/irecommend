import React from 'react';

const colors = {
  palette_0: '#ffd887',
  palette_1: '#eb9361',
  palette_2: '#da5e4e',
  palette_3: '#ab2330',
  palette_4: '#dfffff',
  palette_5: '#b5de89',
  palette_6: '#6aab7c',
  palette_7: '#26616b',
  palette_8: '#a2dceb',
  palette_9: '#759ed0',
  palette_a: '#434ea8',
  palette_b: '#2a2140',
  palette_c: '#e1a7c5',
  palette_d: '#ab7ac6',
  palette_e: '#735bab',
  palette_f: '#3b3772'
};

const ColorPalette = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: colors.palette_4}}>
      <h1 style={{ color: colors.palette_7 }}>Monochromatic Color Palette Preview (Calm Natural Green)</h1>
      {Object.keys(colors).map((key) => (
        <div key={key} style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                backgroundColor: colors[key],
                width: '50px',
                height: '50px',
                border: `1px solid ${colors.palette_8}`,
                marginRight: '10px',
              }}
            ></div>
            <div style={{ flex: 1 }}>
              <p style={{ color: colors[key] }}>{`--${key}: ${colors[key]}`}</p>
              <button
                style={{
                  backgroundColor: colors[key],
                  color: colors.palette_b,
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginRight: '10px',
                }}
              >
                Sample Button
              </button>
              <a
                href="#"
                style={{
                  color: colors[key],
                  textDecoration: 'none',
                  padding: '10px 20px',
                  display: 'inline-block',
                  border: `1px solid ${colors[key]}`,
                  borderRadius: '5px',
                }}
              >
                Sample Link
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
