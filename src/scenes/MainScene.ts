import Phaser from 'phaser';

export class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  create(): void {
    const { width, height } = this.scale;

    this.add.text(width / 2, 60, 'Manor Lords', {
      fontFamily: 'Georgia, serif',
      fontSize: '48px',
      color: '#f0d080',
      fontStyle: 'bold',
    }).setOrigin(0.5);

    this.add.text(width / 2, 110, 'Settlement Management', {
      fontFamily: 'Georgia, serif',
      fontSize: '20px',
      color: '#c0a060',
    }).setOrigin(0.5);

    // Ground tiles
    const tileSize = 40;
    for (let x = 0; x < width; x += tileSize) {
      for (let y = 160; y < height; y += tileSize) {
        const shade = 0.15 + Math.random() * 0.1;
        this.add.rectangle(x, y, tileSize, tileSize, Phaser.Display.Color.GetColor(
          Math.floor(45 + shade * 100),
          Math.floor(80 + shade * 100),
          Math.floor(35 + shade * 60),
        )).setStrokeStyle(1, 0x1a3015, 0.3);
      }
    }

    // A few buildings
    const buildings = [
      { x: 200, y: 260, w: 80, h: 80, label: 'House' },
      { x: 480, y: 260, w: 100, h: 70, label: 'Farm' },
      { x: 720, y: 280, w: 70, h: 90, label: 'Store' },
      { x: 340, y: 440, w: 90, h: 70, label: 'Market' },
      { x: 600, y: 450, w: 80, h: 80, label: 'Barracks' },
    ];

    for (const b of buildings) {
      this.add.rectangle(b.x, b.y, b.w, b.h, 0x8b6914).setStrokeStyle(3, 0x5a4510);
      this.add.rectangle(b.x, b.y - b.h / 2 - 10, b.w + 10, 20, 0x6b3510).setStrokeStyle(2, 0x4a2510);
      this.add.text(b.x, b.y, b.label, {
        fontFamily: 'Georgia, serif',
        fontSize: '14px',
        color: '#ffffff',
      }).setOrigin(0.5);
    }

    // HUD
    this.add.text(20, 20, '💰 Gold: 500', {
      fontFamily: 'monospace',
      fontSize: '18px',
      color: '#f0d080',
    });

    this.add.text(20, 45, '👥 Pop: 12', {
      fontFamily: 'monospace',
      fontSize: '18px',
      color: '#a0c0f0',
    });

    this.add.text(width - 20, 20, 'Season: Spring', {
      fontFamily: 'monospace',
      fontSize: '18px',
      color: '#90c090',
    }).setOrigin(1, 0);

    this.add.text(width / 2, height - 30, 'Click buildings to interact • A Manor Lords recreation', {
      fontFamily: 'Georgia, serif',
      fontSize: '14px',
      color: '#888888',
    }).setOrigin(0.5);
  }
}
