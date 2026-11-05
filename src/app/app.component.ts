
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="experience">

      <!-- Background decorations -->
      <div class="night-sky">
        <div class="stars"></div>

        <!-- Fireworks -->
        <div class="firework firework-one">
          <span *ngFor="let spark of sparks"></span>
        </div>

        <div class="firework firework-two">
          <span *ngFor="let spark of sparks"></span>
        </div>

        <div class="firework firework-three">
          <span *ngFor="let spark of sparks"></span>
        </div>

        <div class="firework firework-four">
          <span *ngFor="let spark of sparks"></span>
        </div>
      </div>

      <!-- Floating sparkles -->
      <div class="sparkles">
        <span *ngFor="let sparkle of sparkles"
              [style.left.%]="sparkle.left"
              [style.top.%]="sparkle.top"
              [style.animation-delay.s]="sparkle.delay">
          ✦
        </span>
      </div>

      <!-- Falling rose petals -->
      <div class="petals">
        <span *ngFor="let petal of petals"
              [style.left.%]="petal.left"
              [style.animation-delay.s]="petal.delay"
              [style.animation-duration.s]="petal.duration">
          🌹
        </span>
      </div>

      <!-- Diyas -->
      <div class="diya diya-left">
        <div class="diya-glow"></div>
        <div class="diya-flame"></div>
        <div class="diya-bowl"></div>
      </div>

      <div class="diya diya-right">
        <div class="diya-glow"></div>
        <div class="diya-flame"></div>
        <div class="diya-bowl"></div>
      </div>

      <!-- Candles -->
      <div class="candle candle-left">
        <div class="candle-flame"></div>
      </div>

      <div class="candle candle-right">
        <div class="candle-flame"></div>
      </div>

      <!-- Main content -->
      <section class="content">

        <!-- Welcome -->
        <section class="intro" *ngIf="!opened">

          <div class="eyebrow">
            <span>✦</span> A LITTLE DIWALI SURPRISE <span>✦</span>
          </div>

          <div class="main-diya">
            <div class="main-flame"></div>
            <div class="main-bowl"></div>
            <div class="main-base"></div>
          </div>

          <h1>
            Hey Sania,
            <br>
            <em>you are my brightest light.</em>
          </h1>

          <p class="intro-copy">
            In a world full of lights, you are my favourite.
          </p>

          <button class="primary-button" (click)="openSurprise()">
            Open Your Surprise <span>♥</span>
          </button>

          <p class="tiny-text">Made with love, just for you</p>

        </section>

        <!-- Letter reveal -->
        <section class="reveal" *ngIf="opened && !showFinal">

          <div class="eyebrow">
            <span>✦</span> A SPECIAL MESSAGE FOR YOU <span>✦</span>
          </div>

          <h2 class="reveal-title">
            A little something
            <em>from my heart</em>
          </h2>

          <!-- Envelope -->
          <div class="envelope-container"
               [class.is-open]="envelopeOpen">

            <div class="envelope">
              <div class="envelope-back"></div>

              <div class="letter-paper">
                <div class="letter-content">
                  <span class="letter-heart">♥</span>
                  <p>To my favourite person</p>
                  <strong>Sania</strong>
                </div>
              </div>

              <div class="envelope-front"></div>
              <div class="envelope-flap"></div>
            </div>

          </div>

          <button
            *ngIf="!envelopeOpen"
            class="primary-button"
            (click)="openLetter()">
            Open My Letter <span>♥</span>
          </button>

          <!-- Full letter -->
          <div class="love-letter" *ngIf="envelopeOpen">

            <div class="letter-decoration">✦</div>

            <h2>
              Happy Diwali,
              <br>
              <em>My dear Sania.</em>
            </h2>

            <p>
              Sania, may your life always shine brighter
              than a thousand Diwali lights. May every
              dream you carry come true.
            </p>

            <p>
              Among all the beautiful lights in this world,
              you will always be my favourite.
              Thank you for being a beautiful part of my life.
            </p>

            <p>
              I hope this Diwali brings you endless happiness,
              beautiful memories, and everything your heart desires.
            </p>

            <div class="note-sign">
              Forever sending you love <span>♥</span>
            </div>

            <button class="primary-button final-button"
                    (click)="finish()">
              One Last Surprise <span>✨</span>
            </button>

          </div>

        </section>

        <!-- Final screen -->
        <section class="finale" *ngIf="showFinal">

          <div class="final-heart">♥</div>

          <div class="eyebrow">
            ✦ MY FAVOURITE LIGHT ✦
          </div>

          <h2>
            Sania, you will always
            <br>
            be my favourite <em>light.</em>
          </h2>

          <p class="final-copy">
            Happy Diwali, my beautiful girl. ❤️
          </p>

          <div class="final-stars">✦　✧　✦　✧　✦</div>

          <button class="primary-button" (click)="replay()">
            Experience Again <span>♥</span>
          </button>

        </section>

      </section>

      <footer>
        Made with <span>♥</span> for Sania
      </footer>

    </main>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {

  opened = false;
  envelopeOpen = false;
  showFinal = false;

  sparks = Array.from({ length: 12 }, (_, i) => i);

  petals = Array.from({ length: 22 }, (_, i) => ({
    left: (i * 37 + 7) % 100,
    delay: (i * 0.7) % 12,
    duration: 8 + (i % 6)
  }));

  sparkles = Array.from({ length: 35 }, (_, i) => ({
    left: (i * 29 + 13) % 100,
    top: (i * 43 + 9) % 100,
    delay: (i * 0.35) % 5
  }));

  openSurprise(): void {
    this.opened = true;
  }

  openLetter(): void {
    this.envelopeOpen = true;
  }

  finish(): void {
    this.showFinal = true;
  }

  replay(): void {
    this.opened = false;
    this.envelopeOpen = false;
    this.showFinal = false;
  }
}
